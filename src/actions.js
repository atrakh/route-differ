export function fetchRoutes(stravaToken) {
  return function(dispatch) {
    dispatch({ type: 'FETCH_ROUTES_REQUEST' })
    const stravaUser = stravaToken.split(' ')
    const req = new Request(
      'https://www.strava.com/api/v3/athletes/' + stravaUser[0] + '/routes',
      {
        headers: new Headers({
          Authorization: 'Bearer ' + stravaUser[1]
        })
      }
    )
    fetch(req)
      .then(res => {
        return res.json()
      })
      .then(function(routes) {
        dispatch({ type: 'FETCH_ROUTES_SUCCESS', routes })
      })
  }
}

export function fetchActivities(stravaToken) {
  return function(dispatch) {
    dispatch({ type: 'FETCH_ACTIVITIES_REQUEST' })
    const stravaUser = stravaToken.split(' ')
    const req = new Request(
      'https://www.strava.com/api/v3/athlete/activities',
      {
        headers: new Headers({
          Authorization: 'Bearer ' + stravaUser[1]
        })
      }
    )
    fetch(req)
      .then(res => {
        return res.json()
      })
      .then(function(activities) {
        dispatch({ type: 'FETCH_ACTIVITIES_SUCCESS', activities })
      })
  }
}

export function updateSelectedRoute(routeIndex) {
  return function(dispatch) {
    dispatch({ type: 'UPDATE_SELECTED_ROUTE', routeIndex })
  }
}

export function updateSelectedActivity(activityIndex) {
  return function(dispatch) {
    dispatch({ type: 'UPDATE_SELECTED_ACTIVITY', activityIndex })
  }
}
