/**
 * Route handler for:
 * GET /examples/bluebird/08jointhen
 *
 * ***
 * BPromise.join().then()
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    //resorces to be joined
    var promisA = BPromise.resolve({x: 'from promise A'});
    var promisB = BPromise.resolve('from promise B');
    var fjaC = function () {
        return 'from function C';
    };

    BPromise.join(promisA, promisB, fjaC, function (valA, valB, valC) {
        res.send('View console results!');
        console.log(valC()); //from function C
        console.log(valB); //from promise B

        return valA.x; //send into then
    }).then(function (valueA) {
        console.log(valueA); //from promise A
    });

};
