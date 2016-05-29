/**
 * Route handler for:
 * GET /examples/bluebird/11resolve
 *
 * ***
 * BPromise.resolve(12).then().catch()
 * - Create promise with resolved value 12 and send it into next then().
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    BPromise.resolve(12)
        .then(function (val) {
            res.send('Resolved value: ' + val); // 12
            console.log(val); // 12
        })
        .catch(function (err) {
            console.log(err.message); //not working because promise has fulfilled state
        });


};
