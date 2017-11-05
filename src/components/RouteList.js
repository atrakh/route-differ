import React from 'react'
import PropTypes from 'prop-types'

import {
  NonIdealState,
  Spinner,
  Menu,
  MenuItem,
  MenuDivider
} from '@blueprintjs/core'

const onClick = e => {
  let classes = e.target.classList
  document
    .getElementsByClassName('route-list')
    .item(0)
    .classList.add('hide')
  document
    .getElementsByClassName('activity-list')
    .item(0)
    .classList.add('show')
}

class RouteList extends React.Component {
  componentWillMount() {
    const { stravaToken } = this.props
    this.props.onFetchRoutes(stravaToken)
  }

  render() {
    const { isFetching, routes, error } = this.props
    if (isFetching) {
      return <NonIdealState visual={<Spinner />} title={'Loading'} />
    }

    if (error) {
      return <NonIdealState visual={'error'} title={'Error loading routes'} />
    }
    return (
      <Menu className="route-list">
        <MenuDivider title={'Routes'} />
        {Array.isArray(routes) &&
          routes.map(route => {
            return (
              <MenuItem key={route.id} text={route.name} onClick={onClick} />
            )
          })}
      </Menu>
    )
  }
}

RouteList.propTypes = {
  stravaToken: PropTypes.string,
  routes: PropTypes.array,
  isFetching: PropTypes.bool
}
export default RouteList
