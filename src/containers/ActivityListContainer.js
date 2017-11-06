import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ActivityList from '../components/ActivityList'
import { getStravaToken } from '../utils/auth'
import { fetchActivities } from '../actions'

const onActivityClick = e => {
  const classes = e.target.classList
  if (!classes.contains('selected')) {
    let oldActivity = document
      .getElementsByClassName('activity-list')
      .item(0)
      .getElementsByClassName('selected')
      .item(0)
    if (oldActivity) {
      oldActivity.classList.remove('selected')
    }
    classes.add('selected')
  } else {
    classes.remove('selected')
  }
}

const mapStateToProps = state => {
  return {
    stravaToken: getStravaToken(),
    isFetchingActivities: state.activityReducer.isFetchingActivities,
    activities: state.activityReducer.activities,
    onActivityClick: onActivityClick
  }
}

const mapDispatchToProps = {
  onFetchActivities: fetchActivities
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList)
