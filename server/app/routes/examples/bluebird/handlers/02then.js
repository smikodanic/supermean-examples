/**
 * Route handler for:
 * GET /examples/bluebird/02then
 *
 * ***
 * .then(fulfilledHandler, rejectedHandler)
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    // create promise object
    var promis = new BPromise(function (resolve, reject) {

        var x;
        // x = 34; //comment this line to generate the error

        if (x) {
            resolve('x= ' + x);
        } else {
            reject('Error: x is ' + x); //Error: x is undefined
        }

    });



    promis
        .then(function (val) {
            res.send('Resolved value: ' + val); //Resolved value: 34
        }, function (err) {
            res.send(err); //Error: x is undefined
        });




    console.log(JSON.stringify(promis, null, 2));
/*
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": 34
}
or
{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": "Error: x is undefined"
}
*/
};
