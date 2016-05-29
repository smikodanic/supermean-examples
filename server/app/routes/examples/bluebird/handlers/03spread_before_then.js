/**
 * Route handler for:
 * GET /examples/bluebird/03spreadbeforethen
 *
 * ***
 * .spread(function (arrVal1, arrVal2) { ... return x })
 * .then(function (x) { ... })
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
            console.log('fulfillmentValues:' + arrVal1 + ' and ' + arrVal2);

            var x = 5;
            return x;
        })
        .then(function (valX) {
            res.send('Returned value is: ' + valX); //5

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
