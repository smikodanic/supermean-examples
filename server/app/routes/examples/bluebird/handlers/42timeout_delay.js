/**
 * Route handler for:
 * GET /examples/bluebird/42timeout-delay
 *
 * ***
 * Shows timeout message 'operation timed out' if promise is not fulfilled or rejected in a certain time.
 * In thi case promise is resolved instantly, but it is deleyed 15 secs, so operation timeout in 5 secs.
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
        .catch((e) => {
            console.log(JSON.stringify(promis, null, 2));
            console.error(e.message)
        });

};

/*
CONSOLE (after 5 secs):

{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "Something resolved!"
}
operation timed out

 */
