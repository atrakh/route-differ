import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import PropTypes from 'prop-types'

export class GoogleMap extends React.Component {
  render() {
    return <div className="map"> <Map google={this.props.google} zoom={14} center={{lat: 37.782551, lng: -122.445368}} className="map container" /></div>
  }
}

GoogleMap.propTypes = {

}

export default GoogleApiWrapper({
  apiKey: null
})(GoogleMap)
