/**
 * Route handler for:
 * GET /examples/bluebird/50cancel-finally
 *
 * ***
 * Cancel bluebird promise inside finally() and call onCancel() function automatically.
 *
 * Will not work because promise is in pending state nad finally will not be executed.
 *
 * Important:
 * ===============
 * Two conditions must be satisfied:
 * 1. Cancellation must be enabled: BPromise.config.cancellation = true
 * 2. Promise is in pending state: promis: "isFulfilled": false, "isRejected": false
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

    //this promis is always in pending state
    var promis = new BPromise((resolve, reject, onCancel) => {
        onCancel(function () {
            console.log('Promise cancelled!!!');
        });
    });



    promis
        .then()
        .catch(e => console.error('Cancel err:' + e.message)) //or err.stack
        .finally(() => {
            promis.cancel();
            console.log(JSON.stringify(promis, null, 2));
        });

};

/*
CONSOLE:


 */
