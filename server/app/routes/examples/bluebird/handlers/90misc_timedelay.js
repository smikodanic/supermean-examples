/**
 * Route handler for:
 * GET /examples/bluebird/100misctimedelay
 *
 * ***
 * Time delayed executions.
 *
 * Notice:
 * Second .then() will not wait for return value.
 * Second then() will be executed immediatelly when promise is in fulfilled state.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    res.send('View results in console.');


    var promis = new BPromise(function (resolve, reject) {
        setTimeout(function () {
            resolve('After 8 seconds.');
        }, 8000);
    });

    promis
        .then(function (val1) {//will be executed after 8 seconds (wait 8sec in console)
            console.log(val1);

            setTimeout(function () {
                return 'After 8+5 seconds.';
            }, 5000);
        })
        .then(function (val2) {
            console.log(val2); //will return undefined (we must use .delay() bluebird method)
        })
        .catch(function (err) {
            console.log(err.message);
        });

};
