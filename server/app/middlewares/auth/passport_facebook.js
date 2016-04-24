/**
 * PassportJS authentication middleware
 * FACEBOOK STRATEGY
 * http://passportjs.org/docs
 */

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
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


    // Configure the Facebook strategy for use by Passport.
    //
    // OAuth 2.0-based strategies require a `verify` function which receives the
    // credential (`accessToken`) for accessing the Facebook API on the user's
    // behalf, along with the user's profile.  The function must invoke `cb`
    // with a user object, which will be set at `req.user` in route handlers after
    // authentication.
    passport.use(new FacebookStrategy({
        clientID: config.auth.facebook.appID,
        clientSecret: config.auth.facebook.appSecret,
        callbackURL: '/examples/auth/passport/facebook/return'
    }, function (accessToken, refreshToken, profile, cb) {
        // In this example, the user's Facebook profile is supplied as the user
        // record.  In a production-quality application, the Facebook profile should
        // be associated with a user record in the application's database, which
        // allows for account linking and authentication with other identity
        // providers.
        return cb(null, profile);
    }));



};
