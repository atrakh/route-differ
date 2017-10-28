import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../components/App'
import queryString from 'query-string'
import Cookies from 'js-cookie'

const login = () => {
  window.location =
    'https://www.strava.com/oauth/authorize?client_id=20973&response_type=code&redirect_uri=https://us-central1-route-differ.cloudfunctions.net/exchangeStravaToken&scope=view_private'
}

const logout = () => {
  Cookies.remove('token')
  window.location = window.location.origin
}

const getStravaToken = () => {
  let queryParams = queryString.parse(window.location.search)
  if (!Cookies.get('token') && queryParams && queryParams.token) {
    Cookies.set('token', queryParams.token)
  }
  return Cookies.get('token')
}

function mapStateToProps(state) {
  return {
    onLoginClick: login,
    onLogoutClick: logout,
    stravaToken: getStravaToken()
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
