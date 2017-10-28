import React from 'react';
import './app.css';

import { Button, NonIdealState } from '@blueprintjs/core';
import queryString from 'query-string';
import RouteList from './RouteList';

var handleClick = () => {
  window.location =
    'https://www.strava.com/oauth/authorize?client_id=20973&response_type=code&redirect_uri=https://us-central1-route-differ.cloudfunctions.net/exchangeStravaToken&scope=view_private&approval_prompt=force';
};

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <nav className="pt-navbar .modifier">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">Route Differ</div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <Button
              iconName="log-in"
              text="Authorize via Strava"
              onClick={handleClick}
            />
          </div>
        </nav>
        <RouteList />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
