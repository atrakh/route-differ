import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import './app.css'

import { Button, NonIdealState } from '@blueprintjs/core'
import RouteList from '../containers/RouteListContainer'
import ActivityList from '../containers/ActivityListContainer'
import Navbar from '../containers/NavbarContainer'
import Map from './Map'
const App = ({ stravaToken }) => (
  <div>
    <Navbar />
    {stravaToken ? (
      <Flex>
        <Box width={'900px'}>
        <Map />
        </Box>
        <Box width={'200px'}>
        <RouteList />
        </Box>
        <Box width={'200px'}>
        <ActivityList />
        </Box>
      </Flex>
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
