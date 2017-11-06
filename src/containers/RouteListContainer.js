import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RouteList from '../components/RouteList'
import { getStravaToken } from '../utils/auth'
import { fetchRoutes, updateSelectedRoute } from '../actions'

const onRouteClick = (e, onUpdateSelectedRoute) => {
  const routeList = document.getElementsByClassName('route-list').item(0)
  const listElements = routeList.getElementsByTagName('li')
  for (var i = 0; i < listElements.length; i++) {
    if (
      listElements[i+1].getElementsByClassName('pt-menu-item').item(0) ===
      e.target
    ) {
      break
    }
  }
  if (
    listElements[i+1].getElementsByClassName('pt-menu-item').item(0) !== e.target
  ) {
    alert('Error selecting route!')
  } else {
    onUpdateSelectedRoute(i)
  }

  routeList.classList.add('hide')
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
    isFetching: state.isFetchingRoutes,
    routes: state.routes
  }
}

const mapDispatchToProps = {
  onFetchRoutes: fetchRoutes,
  onUpdateSelectedRoute: updateSelectedRoute
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteList)
