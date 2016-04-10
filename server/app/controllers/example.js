/**
 * /server/app/routes/example.js
 */
var config = require('../config/');

module.exports = function (router) {
    'use strict';

    /* endpoint: GET /example */
    router.get('/', function (req, res) {
        res.send('This is example!').end();
    });


};