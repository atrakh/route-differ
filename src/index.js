import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/AppContainer'
import fetchRoutes from './actions'
import { routeReducer, activityReducer } from './reducers'
import 'normalize.css'
import '@blueprintjs/core/dist/blueprint.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = Object.assign({ routeReducer, activityReducer })
const store = createStore(
  combineReducers(rootReducer),
  {},
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
