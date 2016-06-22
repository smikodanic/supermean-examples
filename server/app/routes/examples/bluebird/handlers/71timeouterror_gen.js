/**
 * Route handler for:
 * GET /examples/bluebird/71timeouterror-gen
 *
 * ***
 * Promise is timeout before it has been resolved. That's why TimeoutError is created and caught by catch().
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results after 5 seconds.');

    var promis = BPromise.resolve('Something resolved!');

    promis
        .delay(15000)
        .timeout(5000)
        .then(x => console.log(x))
        .catch(BPromise.TimeoutError, (e) => {
            console.log(JSON.stringify(promis, null, 2));
            console.error('catch(): ' + e.message)
        });


};

/*
CONSOLE:

{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "Something resolved!"
}
catch(): operation timed out

 */
