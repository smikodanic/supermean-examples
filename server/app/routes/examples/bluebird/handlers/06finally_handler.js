/**
 * Route handler for:
 * GET /examples/bluebird/06finallyhandler
 *
 * ***
 * .then(fulfilledHandler) will not execute 'fulfilledHandler' if promise is rejected
 * .finally(handler) will execute 'handler' oth on fullfilement or rejection.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    var promis = BPromise.reject('my intentional error');


    promis
        .then(function (val) {
            res.send('Will not be executed'); //will not be executed because of reject()
        }, function (err) {
            res.send(err); //my error
        }).finally(function () {
            console.log('SMTH from finally'); //will be executed in console regardless 'rejected' promise state
        });


    console.log(JSON.stringify(promis, null, 2));
/*
{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": "my intentional error"
}
*/


};
