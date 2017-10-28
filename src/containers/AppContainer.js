import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../components/App'
import { getStravaToken } from '../utils/auth'

function mapStateToProps(state) {
  return {
    stravaToken: getStravaToken()
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
