/**
 * Route handler for:
 * GET /examples/bluebird/92promiseresolveonce
 *
 * ***
 * This example shows how promise can be rejected later, inside then() chain.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    res.send('View results in console.');


    var promis = BPromise.resolve('one');

    promis
        .then(function (val1) {
            console.log(val1);
            console.log(JSON.stringify(promis, null, 2));

            promis = BPromise.reject(new Error('some forced rejection!')).catch(); //reject promise

            return 'two';
        })
        .then(function (val2) {
            console.log(val2);
            console.log(JSON.stringify(promis, null, 2));
        })
        .catch(function (err) {
            console.log(err.message);
        });

};

/*
CONSOLE OUTPUT

one
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "one"
}
two
{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": {}
}

 */
