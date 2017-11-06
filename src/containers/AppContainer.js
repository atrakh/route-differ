import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../components/App'
import { getStravaToken, login } from '../utils/auth'

const onRestartClick = () => {
  document
    .getElementsByClassName('pt-icon-repeat')
    .item(0)
    .classList.remove('show')
  document
    .getElementsByClassName('route-list')
    .item(0)
    .classList.remove('hide')
  document
    .getElementsByClassName('activity-list')
    .item(0)
    .classList.remove('show')
}

function mapStateToProps(state) {
  return {
    stravaToken: getStravaToken(),
    onRestartClick: onRestartClick,
    onLoginClick: login
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
