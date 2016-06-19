/**
 * Route handler for:
 * GET /examples/bluebird/91promisreturn
 *
 * ***
 * This example shows that return 'two' willnot change promis value:
 *
 {
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "one"
 }

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
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "one"
}

 */
