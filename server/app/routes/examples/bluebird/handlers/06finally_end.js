/**
 * Route handler for:
 * GET /examples/bluebird/06finallyend
 *
 * ***
 * .finally() should be placed at the end of chain, because it doesn't receive and doesn't return value
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    var promis = BPromise.reject('Intentional error');


    promis
        .then(function (val) {
            res.send(val); //Look at console!
            return 21; //defines num
        }).catch(function (error) {
            res.send(error);
        }).finally(function () {
            console.log('I m finall!'); //will be executed regardless reject() error
        });


    console.log(JSON.stringify(promis, null, 2));
/*
{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": "Intentional error"
}
*/


};
