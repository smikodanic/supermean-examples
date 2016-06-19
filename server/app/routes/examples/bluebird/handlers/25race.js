/**
 * Route handler for:
 * GET /examples/bluebird/25race
 *
 * ***
 * BPromise.race([promisA, promisB, valueA, valueB], function (elemArr, indexArr, lengthArr) { ... }).then(function (valArr) { ... })
 *
 * .any() returns first fulfilled promise
 * .race() returns first fulfilled or rejected promise
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results!');

    var promisArr = [];
    promisArr[0] = new BPromise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error('Rejection after 3 seconds!'));
        }, 3000);
    });
    promisArr[1] = new BPromise(function (resolve, reject) { //3
        setTimeout(function () {
            resolve('Fullfilment after 5 seconds!');
        }, 3000);
    });



    //*** ANY
    BPromise.any(promisArr) //waits for first fulfilled promise
        .then(function (val) {
            console.log('ANY: ' + val);
        }).catch(function (err) {
            console.log('ANYcatch: ' + err);
        });


    //*** RACE
    BPromise.race(promisArr) //waits for first fulfilled or rejected promise
        .then(function (val) {
            console.log('RACE: ' + val);
        }).catch(function (err) {
            console.log('RACEcatch: ' + err);
        });

};


/*
CONSOLE OUTPUT:

ANY: Fullfilment after 5 seconds!
RACEcatch: Error: Rejection after 3 seconds!
 */
