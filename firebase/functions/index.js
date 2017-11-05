const functions = require("firebase-functions");
const http = require("request");

exports.exchangeStravaToken = functions.https.onRequest((request, response) => {
  const config = functions.config().route_differ;
  const options = {
    url: "https://www.strava.com/oauth/token",
    method: "POST",
    form: {
      client_id: config.strava_client_id,
      client_secret: config.strava_client_secret,
      code: request.query.code
    }
  };
  http(options, (err, res, body) => {
    if (err) {
      console.log(err);
    }

    body = JSON.parse(body);
    response.writeHead(301, {
      Location:
        config.redirect_url +
        "?token=" +
        body.access_token +
        "&id=" +
        body.athlete.id
    });
    response.end();
  });
});
