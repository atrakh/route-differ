import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {
  NonIdealState,
  Spinner,
  Menu,
  MenuItem,
  MenuDivider
} from '@blueprintjs/core'

class ActivityList extends React.Component {
  componentWillMount() {
    const { stravaToken, onFetchActivities } = this.props
    onFetchActivities(stravaToken)
  }

  render() {
    const {
      onActivityClick,
      onUpdateSelectedActivity,
      isFetching,
      activities,
      error
    } = this.props

    if (isFetching) {
      return <NonIdealState visual={<Spinner />} title={'Loading'} />
    }

    if (error) {
      return (
        <NonIdealState visual={'error'} title={'Error loading activities'} />
      )
    }

    return (
      <Menu className="activity-list">
        <MenuDivider title={'Select an activity'} />
        {Array.isArray(activities) &&
          activities.map(activity => {
            return (
              <MenuItem
                key={activity.id}
                text={activity.name}
                label={moment(activity.start_date_local).format('MMM D YYYY')}
                onClick={e => {
                  onActivityClick(e, onUpdateSelectedActivity)
                }}
              />
            )
          })}
      </Menu>
    )
  }
}

ActivityList.propTypes = {
  stravaToken: PropTypes.string,
  activities: PropTypes.array,
  isFetching: PropTypes.bool,
  onActivityClick: PropTypes.func.isRequired,
  onUpdateSelectedActivity: PropTypes.func.isRequired
}
export default ActivityList
