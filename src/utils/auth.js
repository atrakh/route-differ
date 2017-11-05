import queryString from 'query-string'
import Cookies from 'js-cookie'

export const getStravaToken = () => {
  let queryParams = queryString.parse(window.location.search)
  if (!!Cookies.get('token')) {
    return Cookies.get('token')
  } else if (queryParams && queryParams.token && queryParams.id) {
    Cookies.set('token', queryParams.id + ' ' + queryParams.token)
    return Cookies.get('token')
  }
  return null
}

export const login = () => {
  window.location =
    'https://www.strava.com/oauth/authorize?client_id=20973&response_type=code&redirect_uri=https://us-central1-route-differ.cloudfunctions.net/exchangeStravaToken&scope=view_private'
}

export const logout = () => {
  Cookies.remove('token')
  window.location = window.location.origin
}
