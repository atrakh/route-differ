export function reducer(state = {}, action) {
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
    case 'UPDATE_SELECTED_ROUTE':
      return Object.assign({}, state, {
        selectedRoute:
          action.routeIndex != -1 ? state.routes[action.routeIndex] : null
      })
    case 'FETCH_ACTIVITIES_REQUEST':
      return Object.assign({}, state, {
        isFetchingActivities: true
      })
    case 'FETCH_ACTIVITIES_SUCCESS':
      return Object.assign({}, state, {
        isFetchingActivities: false,
        activities: action.activities
      })
    case 'UPDATE_SELECTED_ACTIVITY':
      return Object.assign({}, state, {
        selectedActivity:
          action.activityIndex != -1
            ? state.activities[action.activityIndex]
            : null
      })
    default:
      return state
  }
}
