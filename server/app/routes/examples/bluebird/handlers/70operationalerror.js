/**
 * Route handler for:
 * GET /examples/bluebird/70operationalerror
 *
 * ***
 * Define custom operational error and usage.
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var err = new BPromise.OperationalError('My operational error!!');
    var promis = BPromise.reject(err);

    //operational err can be caught by .error()
    promis
        .then()
        .error(e => console.error('.error(): ' + e.message));


    //.catch()
    promis
        .then()
        .catch(e => console.error('.catch(): ' + e.message));


    //filtered .catch()
    promis
        .then()
        .catch(BPromise.OperationalError, e => console.error('.catch() filtered: ' + e.message));


};

/*
CONSOLE:

.error(): My operational error!!
.catch(): My operational error!!
.catch() filtered: My operational error!!
 */
