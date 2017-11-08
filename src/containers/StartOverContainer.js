import React from 'react'
import { connect } from 'react-redux'

import StartOver from '../components/StartOver'
import { updateSelectedRoute, updateSelectedActivity } from '../actions'

const restartClick = (onUpdateSelectedRoute, onUpdateSelectedActivity) => {
  document
    .getElementsByClassName('pt-icon-repeat')
    .item(0)
    .classList.remove('show')
  document
    .getElementsByClassName('route-list')
    .item(0)
    .classList.remove('hide')
  document
    .getElementsByClassName('activity-list')
    .item(0)
    .classList.remove('show')
  let activity = document
    .getElementsByClassName('activity-list')
    .item(0)
    .getElementsByClassName('selected')
    .item(0)
  if (activity) {
    activity.classList.remove('selected')
  }
  onUpdateSelectedRoute(-1)
  onUpdateSelectedActivity(-1)
}

function mapStateToProps(state) {
  return {
    onRestartClick: restartClick
  }
}

const mapDispatchToProps = {
  onUpdateSelectedRoute: updateSelectedRoute,
  onUpdateSelectedActivity: updateSelectedActivity
}

export default connect(mapStateToProps, mapDispatchToProps)(StartOver)
