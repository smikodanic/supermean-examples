/**
 * Route handler for:
 * GET /examples/bluebird/18some-spread
 *
 * ***
 * BPromise.all([promisA, promisB, valueC, valueD], n).spread(function (valA, valB, valC, valD) { ... })
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
        .spread(function (val1, val2, val3, val4) { //will wait for promisArr[1] to get fulfilled state
            console.log('Three promises are fulfilled after 8 seconds!');

            //echo values
            console.log(val1.x);
            console.log(val2);
            console.log(val3);
            console.log(val4); //undefined because this promise is resolved after 8 secs
        });

};
