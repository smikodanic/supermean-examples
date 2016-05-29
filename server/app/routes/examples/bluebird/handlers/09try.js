/**
 * Route handler for:
 * GET /examples/bluebird/09try
 *
 * ***
 * BPromise.try(handler)
 * - Use when an error should be thrown from handler function.
 * - Simmilar as BPromise.method()
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View results in console');

    //if x<5 error, if x>5 returns x
    var x = 2;


    BPromise.try(function handler() {
        if (x < 5) {
            throw new Error('x must be greter then 5'); //synchronous error
        }

        return x;
    }).then(function (val) {
        console.log(val); // 8
    }).catch(function (err) {
        console.log(err.message); // 'x must be greter then 5'
    });

};
