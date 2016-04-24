/**
 * PassportJS authentication middleware
 * FACEBOOK STRATEGY (OAuth 2.0-based)
 * http://passportjs.org/docs
 */

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../../config');

module.exports = function () {
    'use strict';

    passport.use(new FacebookStrategy({
        clientID: config.auth.facebook.appID,
        clientSecret: config.auth.facebook.appSecret,
        callbackURL: '/examples/auth/passport/facebook/return'
    }, function (accessToken, refreshToken, profile_fb, cb) {
        /* var profile is transfered into req.user and can be used in controller, req.user = profile_fb

            {
                "id": "1136568889728590",
                "displayName": "Drvene Kuće Brvno",
                "name": {},
                "provider": "facebook",
                "_raw": "{\"name\":\"Drvene Ku\\u0107e Brvno\",\"id\":\"1136568889728590\"}",
                "_json": {
                  "name": "Drvene Kuće Brvno",
                  "id": "1136568889728590"
                }
            }
        */

        // console.log('PROFILE' + JSON.stringify(profile_fb, null, 2));
        return cb(null, profile_fb);
    }));



};
