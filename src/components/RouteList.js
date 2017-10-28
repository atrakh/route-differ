import React from 'react';

import { Button, NonIdealState } from '@blueprintjs/core';

class RouteList extends React.Component {
  render() {
    return (
      <NonIdealState
        title="Nothing here yet!"
        description="Try again later."
        visual="thumbs-down"
      />
    );
  }
}

export default RouteList;
