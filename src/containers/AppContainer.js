import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../components/App'
import { getStravaToken, login } from '../utils/auth'

function mapStateToProps(state) {
  return {
    stravaToken: getStravaToken(),
    onLoginClick: login
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
