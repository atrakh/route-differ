import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@blueprintjs/core'
import RouteList from './RouteList'

const Navbar = ({ onLoginClick, onLogoutClick, stravaToken }) => (
  <div>
    <nav className="pt-navbar">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">Route Differ</div>
      </div>
      <div className="pt-navbar-group pt-align-right">
        {!stravaToken ? (
          <Button
            text="Authorize via Strava"
            className="pt-intent-warning pt-minimal pt-icon-log-in"
            onClick={onLoginClick}
          />
        ) : (
          <Button
            text="Logout"
            className="pt-intent-warning pt-minimal pt-icon-log-out"
            onClick={onLogoutClick}
          />
        )}
      </div>
    </nav>
  </div>
)

Navbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  stravaToken: PropTypes.string
}

export default Navbar
