import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RouteList from '../components/RouteList'
import { getStravaToken } from '../utils/auth'
import { fetchRoutes } from '../actions'

const mapStateToProps = state => {
  return {
    stravaToken: getStravaToken(),
    isFetching: state.routeReducer.isFetchingRoutes,
    routes: state.routeReducer.routes
  }
}

const mapDispatchToProps = {
  onFetchRoutes: fetchRoutes
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteList)
