/**
 * Route handler for:
 * GET /examples/bluebird/72cancellationerror
 *
 * ***
 * Cancellation error
 *
 */

const BPromise = require('bluebird');
BPromise.config({
    warnings: true,
    longStackTraces: true,
    cancellation: true, //must be true
    monitoring: true
});

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var promis = new BPromise((resolve, reject, onCancel) => {
        onCancel(function () { //will be executed when promise is cancelled
            console.log('Promise cancelled!!!');
        });
    });

    promis.cancel();

    promis
        .then()
        .catch(BPromise.CancellationError, e => console.error('.catch(): ' + e.message));


};

/*
CONSOLE:

Promise cancelled!!!
.catch(): late cancellation observer
 */
