/**
 * Favicon middleware which enables http://localhost:3001/favicon.ico for any image.
 * Use this HTML code <link rel="icon" href="favicon.ico">
 * https://www.npmjs.com/package/serve-favicon
 */

var favicon = require('serve-favicon');
var path = require('path');


module.exports = function (app) {
    'use strict';
    app.use(favicon(path.join(__dirname + '/../assets/img/favicon.ico')));
};
