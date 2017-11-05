import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ActivityList from "../components/ActivityList";
import { getStravaToken } from "../utils/auth";
import { fetchActivities } from "../actions";

const mapStateToProps = state => {
  return {
    stravaToken: getStravaToken(),
    isFetchingActivities: state.activityReducer.isFetchingActivities,
    activities: state.activityReducer.activities
  };
};

const mapDispatchToProps = {
  onFetchActivities: fetchActivities
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
