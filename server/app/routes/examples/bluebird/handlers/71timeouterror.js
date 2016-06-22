/**
 * Route handler for:
 * GET /examples/bluebird/71timeouterror
 *
 * ***
 * Define custom timeout error and usage.
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var err = new BPromise.TimeoutError('My timeout error!!');
    var promis = BPromise.reject(err);

    //timeout err can't be caught by .error() [WILL NOT WORK]
    // promis
    //     .then()
    //     .error(e => console.error('.error(): ' + e.message));


    //.catch()
    promis
        .then()
        .catch(e => console.error('.catch(): ' + e.message));


    //filtered .catch()
    promis
        .then()
        .catch(BPromise.TimeoutError, e => console.error('.catch() filtered: ' + e.message));


};

/*
CONSOLE:

.catch(): My timeout error!!
.catch() filtered: My timeout error!!
 */
