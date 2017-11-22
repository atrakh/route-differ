# Strava Route Differ

Route Differ is a web application which helps compare & contrast your Strava Routes and activities.

Want to try it out yourself? Click [here](https://strava.atrakh.com) if you've used Strava before, or [here](http://strava.atrakh.com/?token=426d66e1bed68a91070433e3420f6bc6f4f0d246&id=16874945) to login to a demo account.

## Stack
Route Differ is built on React/Redux, using [redux-thunk](https://github.com/gaearon/redux-thunk) as middleware for handling asynchronous actions (talking to Strava's REST API). A stateless Firebase function is used to handle API token exchange.