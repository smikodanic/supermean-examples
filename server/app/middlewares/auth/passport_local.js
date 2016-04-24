/**
 * PassportJS authentication middleware
 * LOCAL STRATEGY
 * http://passportjs.org/docs
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');

var cookieParser = require('cookie-parser');

var config = require('../../config');

module.exports = function (app) {
    'use strict';

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (user, cb) {
        cb(null, user);
    });

    app.use(session({
        name: 'passport_supermean',
        secret: 'somesecret',
        resave: false,
        saveUninitialized: false //if 'false' then session cookie is not created unless req.session.username = 'value' is set
    }));
    app.use(cookieParser());

    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session


    passport.use(new LocalStrategy(
        function (username, password, cb) {
            // console.log('UserPass:' + username + '-' + password);
            if (username !== config.auth.local.username) {
                return cb(null, false);
            }
            if (password !== config.auth.local.password) {
                return cb(null, false);
            }
            return cb(null, username);
        }
    ));



};