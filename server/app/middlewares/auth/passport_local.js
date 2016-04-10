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

    app.use(session({secret: 'somesecret', name: 'passport_supermean', resave: true, saveUninitialized: true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'user',
        passwordField: 'pass',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (user, pass, done) { // callback with email and password from our form
        console.log(JSON.stringify(user, null, 2));
        console.log(JSON.stringify(pass, null, 2));
    }));

};