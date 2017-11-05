import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@blueprintjs/core'
import RouteList from './RouteList'

const Navbar = ({ onLoginClick, onLogoutClick, stravaToken }) => (
  <div>
    <nav className="pt-navbar .modifier">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">Route Differ</div>
      </div>
      <div className="pt-navbar-group pt-align-right">
        {!stravaToken ? (
          <Button
            iconName="log-in"
            text="Authorize via Strava"
            onClick={onLoginClick}
          />
        ) : (
          <Button iconName="log-out" text="Log out" onClick={onLogoutClick} />
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