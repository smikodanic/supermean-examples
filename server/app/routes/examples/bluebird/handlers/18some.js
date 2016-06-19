/**
 * Route handler for:
 * GET /examples/bluebird/18some
 *
 * ***
 * BPromise.all([promisA, promisB, valueA, valueB], n).then(function (valArr) { ... })
 * Execute then() when all promises are in fullfiled state.
 * Returned values are inside array valArr.
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results. Pay attention on time delay of 8 seconds.');


    var promisArr = [];
    promisArr[0] = BPromise.resolve({x: 'From promise promisArr[0].'}); //instantly
    promisArr[1] = new BPromise(function (resolve, reject) { //8sec
        setTimeout(function () {
            resolve('From promise promisArr[1].');
        }, 8000);
    });
    promisArr[2] = new BPromise(function (resolve, reject) { //13sec
        setTimeout(function () {
            resolve('From promise promisArr[1].');
        }, 13000);
    });
    promisArr[3] = 'Some string'; //instantly


    BPromise.some(promisArr, 3) //waits for 3 promises to be resolved
        .then(function (valArr) { //will wait for promisArr[1] to get fulfilled state
            console.log('Three promises are fulfilled after 8 seconds!');

            //echo values
            console.log(valArr[0].x);
            console.log(valArr[1]);
            console.log(valArr[2]);
            console.log(valArr[3]); //undefined because this promise is resolved after 8 secs
        });

};
