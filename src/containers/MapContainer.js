import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import polyline from 'polyline';

import Map from '../components/Map'
import { getStravaToken, login, logout } from '../utils/auth'

const decodePolyline = (pl) => {
  return polyline.decode(pl.map.summary_polyline).map((coord) => {
    return {lat: coord[0], lng: coord[1]}
  })
}
function mapStateToProps(state) {
  return {
    route: state.selectedRoute ? decodePolyline(state.selectedRoute) : [],
    activity: state.selectedActivity ? decodePolyline(state.selectedActivity) : []
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
