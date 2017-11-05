export function routeReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_ROUTES_REQUEST':
      return Object.assign({}, state, {
        isFetchingRoutes: true
      })
    case 'FETCH_ROUTES_SUCCESS':
      return Object.assign({}, state, {
        isFetchingRoutes: false,
        routes: action.routes
      })
    default:
      return state
  }
}

export function activityReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_ACTIVITIES_REQUEST':
      return Object.assign({}, state, {
        isFetchingActivities: true
      })
    case 'FETCH_ACTIVITIES_SUCCESS':
      return Object.assign({}, state, {
        isFetchingActivities: false,
        activities: action.activities
      })
    default:
      return state
  }
}
