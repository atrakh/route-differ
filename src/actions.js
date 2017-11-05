export function fetchRoutesRequest() {
  return { type: "FETCH_ROUTES_REQUEST" };
}

export function fetchRoutesSuccess(routes) {
  return { type: "FETCH_ROUTES_SUCCESS", routes };
}

export function fetchRoutes(stravaToken) {
  return function(dispatch) {
    dispatch(fetchRoutesRequest());
    const stravaUser = stravaToken.split(" ");
    const req = new Request(
      "https://www.strava.com/api/v3/athletes/" + stravaUser[0] + "/routes",
      {
        headers: new Headers({
          Authorization: "Bearer " + stravaUser[1]
        })
      }
    );
    fetch(req)
      .then(res => {
        return res.json();
      })
      .then(function(routes) {
        dispatch(fetchRoutesSuccess(routes));
      });
  };
}

export function fetchActivitiesRequest() {
  return { type: "FETCH_ACTIVITIES_REQUEST" };
}

export function fetchActivitiesSuccess(activities) {
  return { type: "FETCH_ACTIVITIES_SUCCESS", activities };
}

export function fetchActivities(stravaToken) {
  return function(dispatch) {
    dispatch(fetchActivitiesRequest());
    const stravaUser = stravaToken.split(" ");
    const req = new Request(
      "https://www.strava.com/api/v3/athlete/activities",
      {
        headers: new Headers({
          Authorization: "Bearer " + stravaUser[1]
        })
      }
    );
    fetch(req)
      .then(res => {
        return res.json();
      })
      .then(function(activities) {
        dispatch(fetchActivitiesSuccess(activities));
      });
  };
}
