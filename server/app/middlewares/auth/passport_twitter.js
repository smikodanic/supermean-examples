/**
 * PassportJS authentication middleware
 * TWITTER STRATEGY
 * http://passportjs.org/docs
 *
 * Create app at https://apps.twitter.com/
 */

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('../../config');


module.exports = function () {
    'use strict';

    passport.use(new TwitterStrategy({
        consumerKey: config.auth.twitter.apiKey,
        consumerSecret: config.auth.twitter.apiSecret,
        callbackURL: config.auth.twitter.callbackURL,
        profileFields: ['id', 'displayName', 'photos', 'email']
    }, function (accessToken, refreshToken, profile, cb) {
/* var profile is transfered into req.user and can be used in controller, req.user = profile

{
  "id": "3930996808",
  "username": "smikodanic",
  "displayName": "Sasa M.",
  "photos": [
    {
      "value": "https://pbs.twimg.com/profile_images/653311608261734401/q0PThppH_normal.jpg"
    }
  ],
  "provider": "twitter",
  "_raw": "{\"id\":3930996808,\"id_str\":\"3930996808\",\"name\":\"Sasa M.\",\"screen_name\":\"smikodanic\",\"location\":\"\",\"description\":\"\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":false,\"followers_count\":3,\"friends_count\":9,\"listed_count\":0,\"created_at\":\"Sun Oct 11 20:47:28 +0000 2015\",\"favourites_count\":0,\"utc_offset\":-25200,\"time_zone\":\"Pacific Time (US & Canada)\",\"geo_enabled\":false,\"verified\":false,\"statuses_count\":0,\"lang\":\"en\",\"contributors_enabled\":false,\"is_translator\":false,\"is_translation_enabled\":false,\"profile_background_color\":\"C0DEED\",\"profile_background_image_url\":\"http:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png\",\"profile_background_image_url_https\":\"https:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png\",\"profile_background_tile\":false,\"profile_image_url\":\"http:\\/\\/pbs.twimg.com\\/profile_images\\/653311608261734401\\/q0PThppH_normal.jpg\",\"profile_image_url_https\":\"https:\\/\\/pbs.twimg.com\\/profile_images\\/653311608261734401\\/q0PThppH_normal.jpg\",\"profile_link_color\":\"0084B4\",\"profile_sidebar_border_color\":\"C0DEED\",\"profile_sidebar_fill_color\":\"DDEEF6\",\"profile_text_color\":\"333333\",\"profile_use_background_image\":true,\"has_extended_profile\":false,\"default_profile\":true,\"default_profile_image\":false,\"following\":false,\"follow_request_sent\":false,\"notifications\":false}",
  "_json": {
    "id": 3930996808,
    "id_str": "3930996808",
    "name": "Sasa M.",
    "screen_name": "smikodanic",
    "location": "",
    "description": "",
    "url": null,
    "entities": {
      "description": {
        "urls": []
      }
    },
    "protected": false,
    "followers_count": 3,
    "friends_count": 9,
    "listed_count": 0,
    "created_at": "Sun Oct 11 20:47:28 +0000 2015",
    "favourites_count": 0,
    "utc_offset": -25200,
    "time_zone": "Pacific Time (US & Canada)",
    "geo_enabled": false,
    "verified": false,
    "statuses_count": 0,
    "lang": "en",
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "C0DEED",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/653311608261734401/q0PThppH_normal.jpg",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/653311608261734401/q0PThppH_normal.jpg",
    "profile_link_color": "0084B4",
    "profile_sidebar_border_color": "C0DEED",
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_text_color": "333333",
    "profile_use_background_image": true,
    "has_extended_profile": false,
    "default_profile": true,
    "default_profile_image": false,
    "following": false,
    "follow_request_sent": false,
    "notifications": false
  },
  "_accessLevel": "read"
}

*/

        // console.log('TW-PROFILE' + JSON.stringify(profile, null, 2));
        return cb(null, profile);
    }));



};
