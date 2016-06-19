/**
 * Route handler for:
 * GET /examples/bluebird/22filter
 *
 * ***
 * BPromise.filter([promisA, promisB, valueA, valueB], function (elemArr, indexArr, lengthArr) { ... }).then(function (valArr) { ... })
 * Filters promise array and returns to then() filtered array of values.
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results. Pay attention on time delay of 8 seconds.');


    var promisArr = [];
    promisArr[0] = BPromise.resolve(1); //1
    promisArr[1] = new BPromise(function (resolve, reject) { //3
        setTimeout(function () {
            resolve(3);
        }, 8000);
    });
    promisArr[2] = 5; //5


    BPromise.filter(promisArr, function (elem, ind, len) { //promisArr -> [1, 3, 5]
        console.log(' element:' + elem + ' index:' + ind + ' length:' + len); //output to console each iteration
        return elem < 4; //return 1 and 3
    })
        .spread(function (val1, val2, val3) { //will wait for promisArr[1] to get fulfilled state
            console.log('All promises are fulfilled after 8 seconds!');

            console.log('val1=' + val1); //val1=1
            console.log('val2=' + val2); //val2=3
        });

};
