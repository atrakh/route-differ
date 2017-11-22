# Strava Route Differ

Route Differ is a web application which helps compare & contrast your Strava Routes and activities.

Want to try it out yourself? Click [here](http://strava.atrakh.com) if you've used Strava before, or [here](http://strava.atrakh.com/?token=426d66e1bed68a91070433e3420f6bc6f4f0d246&id=16874945) to login to a demo account.

## Architecure
### Front-end
Route Differ is built on React/Redux, using [redux-thunk](https://github.com/gaearon/redux-thunk) as middleware for handling asynchronous actions (talking to Strava's REST API).

### Authentication
A stateless Firebase function is used to handle API token exchange upon login. Perosonal authentication tokens for Strava's rest API are then passed back to Route Differ as a query parameter.

### Hosting
This project is hosted on Heroku.

## Development
This project may be run locally in development mode with the following commands:
```
$ npm i -g yarn
$ yarn
$ yarn run start:dev
```

Route Differ relies on [prettier](https://github.com/prettier/prettier) for formatting. If you use VSCode, then you can add this to your workspace settings to format on save:
```
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.printWidth": 80
}
```

Prettier formatting is enforced via CircleCI build tests.
