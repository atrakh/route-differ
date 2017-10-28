import queryString from 'query-string'
import Cookies from 'js-cookie'

export const getStravaToken = () => {
  let queryParams = queryString.parse(window.location.search)
  if (!Cookies.get('token') && queryParams && queryParams.token) {
    Cookies.set('token', queryParams.token)
  }
  return Cookies.get('token')
}

export const login = () => {
  console.log("logging in")
  window.location =
    'https://www.strava.com/oauth/authorize?client_id=20973&response_type=code&redirect_uri=https://us-central1-route-differ.cloudfunctions.net/exchangeStravaToken&scope=view_private'
}

export const logout = () => {
  console.log("logging out")
  Cookies.remove('token')
  window.location = window.location.origin
}
