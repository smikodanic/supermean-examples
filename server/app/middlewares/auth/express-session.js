/**
 * Authentication with session file stored in './server/tmp/session/'
 * https://www.npmjs.com/package/express-sessions
 */
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var fileStore_options = {
    path: "./server/tmp/session/",
    useAsync: true,
    reapInterval: 5000,
    maxAge: 10000
};

module.exports = function (app) {
    'use strict';

    app.use(session({
        store: new FileStore(fileStore_options),
        secret: '2015tajnikljuc',
        resave: true,
        saveUninitialized: false, //if 'false' then session cookie is not created unless req.session.username = 'value' is set
        unset: 'destroy',
        ephemeral: true //deletes the cookie when the browser is closed. Ephemeral cookies are particularly important if you your app lends itself to use on public computers.
    }));

};