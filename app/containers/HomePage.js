// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DiceActions from '../actions/dice';
import Home from '../components/Home';

function mapStateToProps(state) {
  // console.log(state)
  return {
    count: state.dice.count,
    type: state.dice.type,
    total: state.dice.total,
    each: state.dice.each,
    dirty: state.dice.dirty,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DiceActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
