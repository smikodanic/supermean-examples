/**
 * Route handler for:
 * GET /examples/bluebird/20map
 *
 * ***
 * BPromise.map([promisA, promisB, valueA, valueB], function (elem) { ... }).then(function (valArr) { ... })
 * Simmilar as .all() but do mapping of resolved values.
 *
 * IMPORTANT
 * All promises must be fulfilled, otherwise map will not work !!!
 *
 * This example takes a value from array and map it with adding 2 to each array element.
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results. Pay attention on time delay of 8 seconds.');


    var promisArr = [];
    promisArr[0] = 5; //5
    promisArr[1] = BPromise.resolve(1); //1
    promisArr[2] = new BPromise(function (resolve, reject) { //3
        setTimeout(function () {
            resolve(3);
        }, 8000);
    });

    BPromise.map(promisArr, function (elem) {
        console.log(elem);
        return parseInt(elem, 10) + 2;
    })
        .then(function (valArr) { //will wait for promisArr[1] to get fulfilled state
            console.log('All promises are fulfilled after 8 seconds!');

            //echo values
            console.log(valArr[0]); //7
            console.log(valArr[1]); //3
            console.log(valArr[2]); //5
        });

};
