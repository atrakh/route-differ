import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from '../components/App';

class App extends React.Component {
  render() {
    return <Main />;
  }
}

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
