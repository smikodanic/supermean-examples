/**
 * Route handler for:
 * GET /examples/bluebird/06finallyreturn
 *
 * ***
 * A value returned from .finally handler will not change fulfillment value.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    var promis = BPromise.resolve('Look at console!');


    promis
        .then(function (val) {
            res.send(val); //Look at console!
            return 21; //defines num
        }).finally(function () {
            return 34; //will not change num
        }).then(function (num) {
            console.log(num); //21
        });


    console.log(JSON.stringify(promis, null, 2));
/*
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "Look at console!"
}
*/


};
