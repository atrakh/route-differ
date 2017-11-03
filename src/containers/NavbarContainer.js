import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import { getStravaToken, login, logout } from '../utils/auth'

function mapStateToProps(state) {
  return {
    stravaToken: getStravaToken(),
    onLoginClick: login,
    onLogoutClick: logout
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
