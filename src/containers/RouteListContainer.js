import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RouteList from '../components/RouteList'
import { getStravaToken } from '../utils/auth'
import { fetchRoutes } from '../actions'

const onRouteClick = () => {
  document
    .getElementsByClassName('route-list')
    .item(0)
    .classList.add('hide')
  document
    .getElementsByClassName('activity-list')
    .item(0)
    .classList.add('show')
  document
    .getElementsByClassName('pt-icon-repeat')
    .item(0)
    .classList.add('show')
}

const mapStateToProps = state => {
  return {
    stravaToken: getStravaToken(),
    onRouteClick: onRouteClick,
    isFetching: state.routeReducer.isFetchingRoutes,
    routes: state.routeReducer.routes
  }
}

const mapDispatchToProps = {
  onFetchRoutes: fetchRoutes
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteList)
