/**
 * Route handler for:
 * GET /examples/bluebird/10method
 *
 * ***
 * BPromise.method(fja)().then().catch()
 * - Converts ordinary function 'fja' into thenable function.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View results in console');

    //original function 'fja'
    var fja = function (x) {//if x<5 error, if x>5 returns x
        if (x < 5) {
            throw new Error('x must be greter then 5'); //synchronous error
        } else {
            return x;
        }
    };

    //convert 'fja' into thenable function
    var fjaP = BPromise.method(fja);



    fjaP(845)
        .then(function (val2) {
            console.log(val2); // 845
        })
        .catch(function (err) {
            console.log(err.message); //not working
        });

    fjaP(2)
        .then(function (val2) {
            console.log(val2); //not working
        })
        .catch(function (err) {
            console.log(err.message); // 'x must be greter then 5'
        });

};
