import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import './app.css'

import { Button, Icon, NonIdealState } from '@blueprintjs/core'
import RouteList from '../containers/RouteListContainer'
import ActivityList from '../containers/ActivityListContainer'
import Navbar from '../containers/NavbarContainer'
import Map from './Map'

const App = ({ stravaToken, onLoginClick }) => {
  console.log(stravaToken)
  return (
    <div>
      <Navbar />
      {stravaToken ? (
        <Flex>
          <Box width={3 / 4}>
            <Map />
          </Box>
          <Box>
            <RouteList />
            <ActivityList />
          </Box>
          <Box />
        </Flex>
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
