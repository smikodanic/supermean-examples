/**
 * PassportJS authentication middleware
 * GOOGLE OAuth 2.0 STRATEGY
 * http://passportjs.org/docs
 *
 * Create new project app at https://console.developers.google.com .
 */

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var config = require('../../config');


module.exports = function () {
    'use strict';

    passport.use(new GoogleStrategy({
        clientID: config.auth.google.clientID,
        clientSecret: config.auth.google.clientSecret,
        callbackURL: config.auth.google.callbackURL,
        passReqToCallback: true
    }, function (request, accessToken, refreshToken, profile, cb) {
/* var profile is transfered into req.user and can be used in controller, req.user = profile

{
  "provider": "google",
  "id": "101242836008623800913",
  "displayName": "Saša M",
  "name": {
    "familyName": "M",
    "givenName": "Saša"
  },
  "isPerson": true,
  "isPlusUser": true,
  "language": "en",
  "emails": [
    {
      "value": "smikodan...@gmail.com",
      "type": "account"
    }
  ],
  "email": "smikodan...@gmail.com",
  "photos": [
    {
      "value": "https://lh3.googleusercontent.com/-oOCRyujG7sc/AAAAAAAAAAI/AAAAAAAAFBM/ocnLVRwNCOQ/photo.jpg?sz=50"
    }
  ],
  "_raw": "{\n \"kind\": \"plus#person\",\n \"etag\": \"\\\"PdVrgyg49MXU0yk25IMSkjLLrEk/0F6wKrc1kEranA0DQ_SD9KKY3Yo\\\"\",\n \"nickname\": \"Sale\",\n \"skills\": \"HTML, CSS, Javascript, Codeigniter, PHP,  Bootstrap ...\",\n \"emails\": [\n  {\n   \"value\": \"smik...@gmail.com\",\n   \"type\": \"account\"\n  }\n ],\n \"objectType\": \"person\",\n \"id\": \"101242836008623800913\",\n \"displayName\": \"Saša M\",\n \"name\": {\n  \"familyName\": \"M\",\n  \"givenName\": \"Saša\"\n },\n \"url\": \"https://plus.google.com/101242836008623800913\",\n \"image\": {\n  \"url\": \"https://lh3.googleusercontent.com/-oOCRyujG7sc/AAAAAAAAAAI/AAAAAAAAFBM/ocnLVRwNCOQ/photo.jpg?sz=50\",\n  \"isDefault\": false\n },\n \"isPlusUser\": true,\n \"language\": \"en\",\n \"ageRange\": {\n  \"min\": 21\n },\n \"circledByCount\": 49,\n \"verified\": false,\n \"cover\": {\n  \"layout\": \"banner\",\n  \"coverPhoto\": {\n   \"url\": \"https://lh3.googleusercontent.com/okyhWeaZjs2nKx-NNRO5EYdbBDJlEqrSEFhj8-3_uiHTPitAtS1GSnY_ACOUH-VHyPNxD7oB=s630-fcrop64=1,347d4b82f47cdbc6\",\n   \"height\": 705,\n   \"width\": 940\n  },\n  \"coverInfo\": {\n   \"topImageOffset\": 0,\n   \"leftImageOffset\": 0\n  }\n }\n}\n",
  "_json": {
    "kind": "plus#person",
    "etag": "\"PdVrgyg49MXU0yk25IMSkjLLrEk/0F6wKrc1kEranA0DQ_SD9KKY3Yo\"",
    "nickname": "Sale",
    "skills": "HTML, CSS, Javascript, Codeigniter, PHP,  Bootstrap ...",
    "emails": [
      {
        "value": "smik...@gmail.com",
        "type": "account"
      }
    ],
    "objectType": "person",
    "id": "101242836008623800913",
    "displayName": "Saša M",
    "name": {
      "familyName": "M",
      "givenName": "Saša"
    },
    "url": "https://plus.google.com/101242836008623800913",
    "image": {
      "url": "https://lh3.googleusercontent.com/-oOCRyujG7sc/AAAAAAAAAAI/AAAAAAAAFBM/ocnLVRwNCOQ/photo.jpg?sz=50",
      "isDefault": false
    },
    "isPlusUser": true,
    "language": "en",
    "ageRange": {
      "min": 21
    },
    "circledByCount": 49,
    "verified": false,
    "cover": {
      "layout": "banner",
      "coverPhoto": {
        "url": "https://lh3.googleusercontent.com/okyhWeaZjs2nKx-NNRO5EYdbBDJlEqrSEFhj8-3_uiHTPitAtS1GSnY_ACOUH-VHyPNxD7oB=s630-fcrop64=1,347d4b82f47cdbc6",
        "height": 705,
        "width": 940
      },
      "coverInfo": {
        "topImageOffset": 0,
        "leftImageOffset": 0
      }
    }
  }
}


*/

        // console.log('G-PROFILE' + JSON.stringify(profile, null, 2));
        return cb(null, profile);
    }));



};
