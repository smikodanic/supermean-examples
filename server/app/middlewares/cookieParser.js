/**
 * Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
 * https://www.npmjs.com/package/cookie-parser
 */

var cookieParser = require('cookie-parser');

module.exports = function (app) {
    'use strict';
    app.use(cookieParser());
};