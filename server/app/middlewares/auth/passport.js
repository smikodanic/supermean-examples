/**
 * PassportJS authentication middleware
 * COMMON MIDDLEWARE
 * This is required to passport work properly.
 * http://passportjs.org/docs
 */

var passport = require('passport');
var session = require('express-session');


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

    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

};
