/**
 * PassportJS authentication middleware
 * FACEBOOK STRATEGY (OAuth 2.0-based)
 * http://passportjs.org/docs
 *
 * Create app at https://developers.facebook.com/
 */

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../../config');

module.exports = function () {
    'use strict';

    passport.use(new FacebookStrategy({
        clientID: config.auth.facebook.appID,
        clientSecret: config.auth.facebook.appSecret,
        callbackURL: config.auth.facebook.callbackURL,
        profileFields: ['id', 'displayName', 'photos', 'email']
    }, function (accessToken, refreshToken, profile, cb) {
/* var profile is transfered into req.user and can be used in controller, req.user = profile

{
    "id": "1136568889728590",
    "displayName": "Drvene Kuće Brvno",
    "name": {},
    "emails": [
      {
        "value": "face@brvno.com"
      }
    ],
    "photos": [
      {
        "value": "https://scontent.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/c0.0.50.50/p50x50/394227_391273827591437_848680801_n.jpg?oh=342612819789d7e738fa87e647c71c2f&oe=57B078DA"
      }
    ],
    "provider": "facebook",
    "_raw": "{\"id\":\"1136568889728590\",\"name\":\"Drvene Ku\\u0107e Brvno\",\"picture\":{\"data\":{\"is_silhouette\":false,\"url\":\"https:\\/\\/scontent.xx.fbcdn.net\\/hprofile-xaf1\\/v\\/t1.0-1\\/c0.0.50.50\\/p50x50\\/394227_391273827591437_848680801_n.jpg?oh=342612819789d7e738fa87e647c71c2f&oe=57B078DA\"}},\"email\":\"face\\u0040brvno.com\"}",
    "_json": {
      "id": "1136568889728590",
      "name": "Drvene Kuće Brvno",
      "picture": {
        "data": {
          "is_silhouette": false,
          "url": "https://scontent.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/c0.0.50.50/p50x50/394227_391273827591437_848680801_n.jpg?oh=342612819789d7e738fa87e647c71c2f&oe=57B078DA"
        }
      },
      "email": "face@brvno.com"
    }
}
*/

        // console.log('FB-PROFILE' + JSON.stringify(profile, null, 2));
        return cb(null, profile);
    }));



};
