/**
 * Route handler for:
 * GET /examples/bluebird/08jointhen
 *
 * ***
 * BPromise.join().then().catch()
 *
 * Join promises. All promises must be fullfilled in order to execute next then().
 * If one of the promises is rejected then catch() is executed instead of then().
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

            res.send('View console results!');

    //resorces to be joined
    var promisA = BPromise.resolve({x: 'from promise A'});
    var promisB = BPromise.resolve('from promise B');
    var fjaC = function () {
        return 'from function C';
    };

    //rejected promises
    // var promisA = BPromise.reject(new Error('ERR from promisA'));
    var promisB = BPromise.reject(new Error('ERR from promisB'));

    BPromise.join(promisA, promisB, fjaC, function (valA, valB, valC) {
        console.log(valC()); //from function C
        console.log(valB); //from promise B

        return valA.x; //send into then
    }).then(function (valueA) {
        console.log(valueA); //from promise A
    }).catch(function (err) {
        console.log(err.message);
    });

};
