import React from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import { Alert } from '@blueprintjs/core'

class Map extends React.Component {
  // todo: DRY this up
  componentWillReceiveProps(nextProps) {
    this.route && this.route.setMap(null)
    this.activity && this.activity.setMap(null)
    if (nextProps.route.length > 0 && nextProps.route != this.route) {
      this.route = new this.google.maps_.Polyline({
        path: nextProps.route,
        geodesic: true,
        strokeColor: 'red',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })
      this.route.setMap(this.google.map_)
    }
    if (nextProps.activity.length > 0 && nextProps.activity != this.activity) {
      this.activity && this.activity.setMap(null)
      this.activity = new this.google.maps_.Polyline({
        path: nextProps.activity,
        geodesic: true,
        strokeColor: 'blue',
        strokeOpacity: 0.75,
        strokeWeight: 2
      })
      this.activity.setMap(this.google.map_)
    }
  }
  render() {
    const { route, activity, isBrokenItemSelected } = this.props
    return (
      <div>
        <Alert
          isOpen={isBrokenItemSelected}
          // TODO: use props instead of refreshing
          onConfirm={() => {
            window.location = window.location.origin
          }}
        >
          {
            "The item you've selected is broken, please select another item. This is an artifact of Strava API behavior."
          }
        </Alert>
        <div className="map">
          <GoogleMapReact
            ref={google => {
              if (google) {
                this.google = google
              }
            }}
            bootstrapURLKeys={{
              key: 'AIzaSyACLcGZ7uCvTDMGk0UhD0e2qmzKmaWcYt0'
            }} // this is safe
            zoom={11}
            center={route[0] || { lat: 37.773972, lng: -122.431297 }}
          />
        </div>
      </div>
    )
  }
}

Map.propTypes = {
  route: PropTypes.array,
  activity: PropTypes.array
}

export default Map
