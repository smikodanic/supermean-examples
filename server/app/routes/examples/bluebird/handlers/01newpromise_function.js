/**
 * Route handler for:
 * GET /examples/bluebird/01newpromisefunction
 *
 * ***
 * Promise defined inside function and returned back
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    //function which wraps bluebird promise (has 'x' parameter)
    var fja = function (x) {
        return new BPromise(function (resolve, reject) {

            if (x) {
                resolve('x= ' + x);
            } else {
                reject('Error: x is ' + x); //Error: x is undefined
            }

        });
    };



    var param = 12;
    fja(param)
        .then(function (val) {
            res.send('Resolved value: ' + val); //Resolved value: par
        }).catch(function (err) {
            res.send(err); //Error: x is undefined
        });




    console.log(JSON.stringify(fja(param), null, 2));
/*
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": 12
}
or
{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": "bad very bad"
}
*/
};
