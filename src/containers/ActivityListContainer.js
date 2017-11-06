import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ActivityList from '../components/ActivityList'
import { getStravaToken } from '../utils/auth'
import { fetchActivities, updateSelectedActivity } from '../actions'

const onActivityClick = (e, onUpdateSelectedActivity) => {
  const activityList = document.getElementsByClassName('activity-list').item(0)
  const listElements = activityList.getElementsByTagName('li')
  for (var i = 0; i < listElements.length; i++) {
    if (
      listElements[i+1].getElementsByClassName('pt-menu-item').item(0) ===
      e.target
    ) {
      break
    }
  }
  if (
    listElements[i+1].getElementsByClassName('pt-menu-item').item(0) !== e.target
  ) {
    alert('Error selecting activity!')
  } else {
    onUpdateSelectedActivity(i)
  }
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
    isFetchingActivities: state.isFetchingActivities,
    activities: state.activities,
    onActivityClick: onActivityClick
  }
}

const mapDispatchToProps = {
  onFetchActivities: fetchActivities,
  onUpdateSelectedActivity: updateSelectedActivity
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList)
