/**
 * Route handler for:
 * GET /examples/bluebird/03spread
 *
 * ***
 * .spread(function (arrVal1, arrVal2) { ... }).catch()
 *
 * Resolved value (fulfillmentValue) must be an array.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    // create promise object
    var promis = new BPromise(function (resolve, reject) {

        var arr;
        arr = [12, 15]; //comment this line to generate the error

        if (arr) {
            resolve(arr);
        } else {
            reject('Error: arr is not defined!');
        }

    });



    promis
        .spread(function (arrVal1, arrVal2) {
            res.send('Resolved values are: ' + arrVal1 + ' and ' + arrVal2);
        }).catch(function (err) {
            res.send(err);
        });



    console.log(JSON.stringify(promis, null, 2));
/*
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": [
    12,
    15
  ]
}
 */
};
