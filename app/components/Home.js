// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import { clipboard } from 'electron';

type Props = {
  roll: () => void,
  updateCnt: () => void,
  updateType: () => void,
  count: number,
  type: number,
  total: number,
  each: Array<number>
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    // console.log(this.props)
    const {
      roll,
      updateCnt,
      updateType,
      count,
      type,
      total,
      each
    } = this.props;

    const list = [];
    let ct = `${count}D${type}:${total}`;

    if (each && each.length > 1) {
      const il = []
      const cl = []
      each.forEach((value: number) => {
        il.push(<li>{value}</li>);
        cl.push(`${value}`);
      });
      list.push(<ul className={styles.each}>{il}</ul>);
      ct += `(${cl.join(' + ')})`;
    }
    clipboard.writeText(ct)

    return (
      <div className={styles.container} data-tid="container">
        <span className={styles.dices}>
          【
          <input
            type="number"
            min={1}
            max={20}
            size={2}
            onChange={updateCnt}
            value={count}
            className={styles.count}
          />
          D
          <input
            type="number"
            min={2}
            max={100}
            size={3}
            list="dices"
            onChange={updateType}
            value={type}
            className={styles.type}
          />
          <datalist id="dices">
            <option key={4}>4</option>
            <option key={6}>6</option>
            <option key={8}>8</option>
            <option key={10}>10</option>
            <option key={20}>20</option>
            <option key={100}>100</option>
          </datalist>
          :
          <span className="result">
            <span className={styles.total}>{total}</span>
            {list}】
          </span>
        </span>
        <div className={styles.rolls}>
          <button type="button" onClick={roll} data-tclass="btn">
            Roll!
          </button>
        </div>
      </div>
    );
  }
}
