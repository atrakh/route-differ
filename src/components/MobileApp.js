import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from 'grid-styled'
import { Button, Icon, NonIdealState } from '@blueprintjs/core'
import RouteList from '../containers/RouteListContainer'
import ActivityList from '../containers/ActivityListContainer'
import Navbar from '../containers/NavbarContainer'
import Map from '../containers/MapContainer'
import StartOver from '../containers/StartOverContainer'
import Stats from '../containers/StatsContainer'

const App = ({ stravaToken, onLoginClick }) => {
  return (
    <div>
      <Navbar />
      {stravaToken ? (
        <div>
          <Map />
          <Stats />
          <StartOver />
          <RouteList />
          <ActivityList />
        </div>
      ) : (
        <NonIdealState
          title="Not logged in"
          description="Authorize with Strava to diff 'em routes"
          visual={
            <Button
              className="pt-intent-warning pt-large pt-icon-log-in"
              onClick={onLoginClick}
            />
          }
        />
      )}
    </div>
  )
}

App.propTypes = {
  stravaToken: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired
}

export default App
