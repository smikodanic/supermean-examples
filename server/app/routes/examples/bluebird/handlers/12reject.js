/**
 * Route handler for:
 * GET /examples/bluebird/12reject
 *
 * ***
 * BPromise.reject('MY error').then().catch()
 * - Create promise with rejected value.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    BPromise.reject(new Error('My custom error!!!'))
        .then(function (val) {
            console.log(val); //not working because promise has rejected state
        })
        .catch(function (err) {
            res.send('Rejected value: ' + err.message); // My custom error!!!
            console.log(err.message);
        });


};
