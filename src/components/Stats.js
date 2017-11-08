import React from 'react'
import PropTypes from 'prop-types'

const Stats = ({ route, activity }) => {
  console.log(route, activity)
  console.log
  // TODO: move logic to container

  if (route && activity) {
    var prefixBlurb = 'Your ' + activity.type.toLowerCase()
    var distanceBlurb =
      prefixBlurb +
      ' was ' +
      Math.round(
        Math.abs((route.distance - activity.distance) / 1000)
      ).toString() +
      ' kilometers ' +
      (route.distance > activity.distance ? ' shorter ' : ' longer ') +
      'than ' +
      route.name +
      '.'
    var elevationBlurb =
      prefixBlurb +
      ' had ' +
      Math.round(
        Math.abs(route.elevation_gain - activity.total_elevation_gain)
      ).toString() +
      (route.elevation_gain > activity.total_elevation_gain
        ? ' less '
        : ' more ') +
      'meters of climbing than ' +
      route.name +
      '.'
    var timeBlurb =
      'You finished your ' +
      activity.type.toLowerCase() +
      ' ' +
      Math.round(
        Math.abs(route.estimated_moving_time - activity.moving_time) / 60
      ) +
      ' minutes ' +
      (route.estimated_moving_time > activity.moving_time
        ? ' slower '
        : ' faster ') +
      ' than Strava had estimated.' +
      (activity.elapsed_time - activity.moving_time > 60
        ? ' Also, you were not moving for ' +
          Math.round(
            (activity.elapsed_time - activity.moving_time) / 60
          ).toString() +
          ' minutes.'
        : '')
    return (
      <div>
        <div className="pt-card pt-elevation-0">
          <h5>Distance</h5>
          <p>{distanceBlurb}</p>
        </div>
        <div className="pt-card pt-elevation-1">
          <h5>Elevation</h5>
          <p>{elevationBlurb}</p>
        </div>
        <div className="pt-card pt-elevation-2">
          <h5>Time</h5>
          <p>{timeBlurb}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="pt-card pt-elevation-0">
      <h5>Stats</h5>
      <p>{'Select a route & activity to display your stats.'}</p>
    </div>
  )
}

Stats.propTypes = {
  route: PropTypes.object,
  activity: PropTypes.object
}

export default Stats
