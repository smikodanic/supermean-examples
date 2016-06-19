/**
 * Route handler for:
 * GET /examples/bluebird/16all
 *
 * ***
 * BPromise.all([promisA, promisB, valueA, valueB]).then(function (valArr) { ... })
 * Execute then() when all promises are in fullfiled state.
 * Returned values are inside array valArr.
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results. Pay attention on time delay of 8 seconds.');


    var promisArr = [];
    promisArr[0] = BPromise.resolve({x: 'From promise promisArr[0].'});
    promisArr[1] = new BPromise(function (resolve, reject) {
        setTimeout(function () {
            resolve('From promise promisArr[1].');
        }, 8000);
    });
    promisArr[2] = 'Some string'; //this is String value, not promise


    BPromise.all(promisArr)
        .then(function (valArr) { //will wait for promisArr[1] to get fulfilled state
            console.log('All promises are fulfilled after 8 seconds!');

            //echo values
            console.log(valArr[0].x);
            console.log(valArr[1]);
            console.log(valArr[2]);
        });

};
