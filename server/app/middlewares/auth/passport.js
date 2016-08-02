/**
 * PassportJS authentication middleware
 * COMMON MIDDLEWARE
 * This is required to passport work properly.
 * http://passportjs.org/docs
 *
 * Notice: serialize and deserialize functions must be provided to passport for sessions to work.
 */

var passport = require('passport');
var session = require('express-session');


////////////  storing session in memory (RAM) (not recommended for production, althought it's express-seesion default)
var MemoryStore = require('session-memory-store')(session);
var memoryStoreOptions = {
    expires: 3 * 60 * 60, //session will expires after 3 hours
    checkperiod: 10 * 60 //every 10 second check if session is expired
};
// var storing = new MemoryStore(memoryStoreOptions);


////////////  storing session in file (hard drive)
var FileStore = require('session-file-store')(session);
var fileStoreOptions = {
    path: 'server/tmp/session', //directory where sessions will be stored
    ttl: 3 * 60 * 60, //session will expires after 3 hours
    logFn: console.log //logging function
};
var storing = new FileStore(fileStoreOptions);





module.exports = function (app) {
    'use strict';

    /* Serialize function stores data to session: req.session.passport.user .
     * Also it creates token for session cookie (passport_supermean: s%3AZdP2jZyPhB3PCHp3gmAQ0QuSzwSw-bqz.NHBQfGR%2B9bq9BDUJvOp2Kh1ObKTareex21UAEXRwh7k). */
    passport.serializeUser(function (user, cb) {
        console.log(user);
        cb(null, user);
    });

    passport.deserializeUser(function (user, cb) {
        cb(null, user);
    });


    //creating session-cookie
    app.use(session({
        name: 'passport_supermean', //cookie name
        secret: 'somesecret', //secret which encrypt the browser cookie & server session
        resave: false,
        saveUninitialized: false, //if 'false' then session cookie is not created unless req.session.username = 'value' is set
        store: storing
    }));


    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

};
