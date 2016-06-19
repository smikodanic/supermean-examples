/**
 * Route handler for:
 * GET /examples/bluebird/23each
 *
 * ***
 * BPromise.each([promisA, promisB, valueA, valueB], function (elemArr, indexArr, lengthArr) { ... }).then(function (valArr) { ... })
 * Iterate each promise and returns to then() not changed array of values.
 *
 * NOTICE:
 * BPromise.each() doesn't act as JS .forEach() method because BPromise.each() doesn't modify original array.
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    var promisArr = [];
    promisArr[0] = BPromise.resolve(1); //1
    promisArr[1] = new BPromise(function (resolve, reject) { //3
        setTimeout(function () {
            resolve(3);
        }, 8000);
    });
    promisArr[2] = 5; //5

    var x;
    BPromise.each(promisArr, function (elem, ind, len) { //promisArr -> [1, 3, 5]
        console.log(' element:' + elem + ' index:' + ind + ' length:' + len); //output to console each iteration
        x = elem + 10;
        return x;
    })
        .then(function (valArr) { //valArr is unmodified [1,3,5]
            console.log('All promises are fulfilled after 8 seconds!');

            console.log(JSON.stringify(valArr, null, 2));
            res.send('View console results. Pay attention on time delay of 8 seconds.<br>Resulting array is not modified by each() ' + JSON.stringify(valArr, null, 2));
        });

};
