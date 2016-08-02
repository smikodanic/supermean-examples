/**
 * PassportJS authentication middleware
 * COMMON MIDDLEWARE
 * This is required to passport work properly.
 * http://passportjs.org/docs
 *
 * Notice:
 *   Serialize and deserialize functions must be provided to passport for sessions to work.
 *   Serialize sets req.session.passport, while deserialze take 'user' from req.session.passport .
 *   req.session:  {
        "cookie": {
          "originalMaxAge": null,
          "expires": null,
          "httpOnly": true,
          "path": "/"
        },
        "passport": {
          "user": "someuser"
        },
        "__lastAccess": 1470136042719
    }
 */

var passport = require('passport');
var session = require('express-session');
var storing = require('./session_storage/fileStore')(session);


module.exports = function (app) {
    'use strict';

    //creating session-cookie
    app.use(session({
        name: 'passport_supermean', //cookie name
        secret: 'somesecret', //secret which encrypt the browser cookie & server session
        resave: false, //Forces the session to be saved back to the session store, even if the session was never modified during the request.
        saveUninitialized: false, //if 'false' then session cookie is not created unless req.session.username = 'value' is set
        store: storing
    }));


    app.use(passport.initialize()); //initialize passport module


    // REQUIRED FOR PERSISTENT LOGIN SESSION
    //
    /* passport.session() is shortcut for passport.authenticate('session')
     * Passport will treat session authentication as yet another authentication strategy, which will compare 'user' sent from html form with req.session.passport.user .
     * That means 'session' strategy will not use 'user' from database or config.auth.local.username but from req.session.passport.user .*/
    app.use(passport.session());
    // app.use(passport.authenticate('session')); // or use this

    /* Set req.session.passport on sucessful login .*/
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    /* Get user from req.session.passport */
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

};
