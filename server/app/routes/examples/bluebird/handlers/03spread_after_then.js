/**
 * Route handler for:
 * GET /examples/bluebird/03spreadafterthen
 *
 * ***
 * .then(function (return [arrVal1, arrVal2]))
 * .spread(function (arrVal1, arrVal2) { ... })
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
        .then(function (arr) {
            console.log('arr:' + JSON.stringify(arr, null, 2)); //arr:[12, 15]
            return [32, 33]
        }).spread(function (val1, val2) {
            res.send('Resolved values are: ' + val1 + ' and ' + val2); //32 and 33
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
