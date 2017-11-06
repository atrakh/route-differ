import React from 'react'
import PropTypes from 'prop-types'

import {
  NonIdealState,
  Spinner,
  Menu,
  MenuItem,
  MenuDivider
} from '@blueprintjs/core'

class RouteList extends React.Component {
  componentWillMount() {
    const { stravaToken, onFetchRoutes } = this.props
    onFetchRoutes(stravaToken)
  }

  render() {
    const {
      onRouteClick,
      onUpdateSelectedRoute,
      isFetching,
      routes,
      error
    } = this.props
    if (isFetching) {
      return <NonIdealState visual={<Spinner />} title={'Loading'} />
    }

    if (error) {
      return <NonIdealState visual={'error'} title={'Error loading routes'} />
    }

    return (
      <Menu className="route-list">
        <MenuDivider title={'Select a route'} />
        {Array.isArray(routes) &&
          routes.map(route => {
            return (
              <MenuItem
                key={route.id}
                text={route.name}
                onClick={e => {
                  onRouteClick(e, onUpdateSelectedRoute)
                }}
              />
            )
          })}
      </Menu>
    )
  }
}

RouteList.propTypes = {
  stravaToken: PropTypes.string,
  onRouteClick: PropTypes.func.isRequired,
  onUpdateSelectedRoute: PropTypes.func.isRequired,
  routes: PropTypes.array,
  isFetching: PropTypes.bool
}
export default RouteList
