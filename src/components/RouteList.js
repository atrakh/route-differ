import React from "react";
import PropTypes from "prop-types";

import {
  NonIdealState,
  Spinner,
  Menu,
  MenuItem,
  MenuDivider
} from "@blueprintjs/core";

class RouteList extends React.Component {
  componentWillMount() {
    const { stravaToken } = this.props;
    this.props.onFetchRoutes(stravaToken);
  }

  render() {
    const { isFetching, routes, error } = this.props;
    if (isFetching) {
      return <NonIdealState visual={<Spinner />} title={"Loading"} />;
    }

    if (error) {
      return <NonIdealState visual={"error"} title={"Error loading routes"} />;
    }
    return (
      <Menu>
        <MenuDivider title={"Routes"} />
        {Array.isArray(routes) &&
          routes.map(route => {
            return <MenuItem key={route.id} text={route.name} />;
          })}
      </Menu>
    );
  }
}

RouteList.propTypes = {
  stravaToken: PropTypes.string,
  routes: PropTypes.array,
  isFetching: PropTypes.bool
};
export default RouteList;
