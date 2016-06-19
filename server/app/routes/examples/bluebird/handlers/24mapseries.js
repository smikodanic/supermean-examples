/**
 * Route handler for:
 * GET /examples/bluebird/24mapseries
 *
 * ***
 * Acts as .map() and where is the difference???
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results. Pay attention on time delay of 5 seconds.');


    var promisArr = [];
    promisArr[0] = 5; //5
    promisArr[1] = BPromise.resolve(1); //1
    promisArr[2] = new BPromise(function (resolve, reject) { //3
        setTimeout(function () {
            resolve(3);
        }, 5000);
    });

    BPromise.mapSeries(promisArr, function (elem) {
        return parseInt(elem, 10) + 2;
    })
        .then(function (valArr) { //will wait for promisArr[1] to get fulfilled state
            console.log('All promises are fulfilled after 5 seconds!');

            //echo values
            console.log(valArr[0]); //3
            console.log(valArr[1]); //5
            console.log(valArr[2]); //7
        });

};
