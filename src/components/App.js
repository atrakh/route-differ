import React from 'react'
import PropTypes from 'prop-types'
import './app.css'

import { Button, NonIdealState } from '@blueprintjs/core'
import RouteList from './RouteList'
import Navbar from '../containers/NavbarContainer'

const App = ({ stravaToken }) => (
  <div>
    <Navbar />
    {stravaToken ? (
      <RouteList />
    ) : (
      <NonIdealState
        title="Not logged in"
        description="Authorize with Strava to diff 'em routes"
        visual="disable"
      />
    )}
  </div>
)

App.propTypes = {
  stravaToken: PropTypes.string
}

export default App
