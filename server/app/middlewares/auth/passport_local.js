/**
 * PassportJS authentication middleware
 * LOCAL STRATEGY
 * http://passportjs.org/docs
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');


module.exports = function (app) {
    'use strict';

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (user, cb) {
        cb(null, user);
    });

    app.use(session({secret: 'somesecret', name: 'passport_supermean', resave: true, saveUninitialized: true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session


    passport.use(new LocalStrategy(
        function (username, password, cb) {
            // console.log('UP:' + username + '-' + password);
            if (username !== 'sasa') {
                return cb(null, false);
            }
            if (password !== 'test') {
                return cb(null, false);
            }
            return cb(null, username);
        }
    ));

};