var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function (app) {
    'use strict';

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
};