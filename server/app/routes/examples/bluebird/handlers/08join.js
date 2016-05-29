/**
 * Route handler for:
 * GET /examples/bluebird/08join
 *
 * ***
 * BPromise.join(promisA, promisB, functionC, function (a, b, c) { ... })
 * Execute promisA, promisB and functionC and send results as parameters a,b,c into 'join' handler function.
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var promisA = BPromise.resolve({x: 'from promise A'});
    var promisB = BPromise.resolve('from promise B');
    var fjaC = function () {
        return 'from function C';
    };

    BPromise.join(promisA, promisB, fjaC, function (valA, valB, valC) {
        res.send('View console results!');
        console.log(valA.x); //from promise A
        console.log(valB); //from promise B
        console.log(valC()); //from function C
    });

};
