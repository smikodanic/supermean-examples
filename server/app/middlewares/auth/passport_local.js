/**
 * PassportJS authentication middleware
 * LOCAL STRATEGY
 * http://passportjs.org/docs
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var config = require('../../config');

module.exports = function () {
    'use strict';

    passport.use(new LocalStrategy(
        function (username, password, cb) {
            //if username doesn't exist
            if (username !== config.auth.local.username) {
                return cb(null, false, {message: 'BAD username!!!'}); //message: is connect-flash message
            }

            //if password is not correct
            if (password !== config.auth.local.password) {
                return cb(null, false, {message: 'BAD password!!!'});
            }

            /* var username is transfered into req.user and can be used in controller
                req.user = username
                Notice: In this example username is string, but can be compound object too.
            */
            // console.log('UserPass:' + username + '-' + password);
            return cb(null, username);
        }
    ));



};
