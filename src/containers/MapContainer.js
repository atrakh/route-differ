import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import polyline from 'polyline'

import Map from '../components/Map'
import { getStravaToken, login, logout } from '../utils/auth'

const decodePolyline = pl => {
  return polyline.decode(pl.map.summary_polyline).map(coord => {
    return { lat: coord[0], lng: coord[1] }
  })
}
function mapStateToProps(state) {
  let isBrokenRouteSelected =
    state.selectedRoute &&
    state.selectedRoute.map &&
    !state.selectedRoute.map.summary_polyline
  let isBrokenActivitySelected =
    state.selectedActivity &&
    state.selectedActivity.map &&
    !state.selectedActivity.map.summary_polyline
  return {
    route:
      state.selectedRoute &&
      state.selectedRoute.map &&
      state.selectedRoute.map.summary_polyline
        ? decodePolyline(state.selectedRoute)
        : [],
    activity:
      state.selectedActivity &&
      state.selectedActivity.map &&
      state.selectedActivity.map.summary_polyline
        ? decodePolyline(state.selectedActivity)
        : [],
    isBrokenItemSelected: isBrokenRouteSelected || isBrokenActivitySelected
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
