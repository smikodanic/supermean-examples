/**
 * Route handler for:
 * GET /examples/bluebird/17props
 *
 * ***
 * BPromise.props({promisA, promisB, valueA, valueB}).then(function (valArr) { ... })
 * Execute then() when all promises are in fullfiled state.
 * Returned values are inside array valArr.
 * Notice .all() uses Array and .props() using Object.
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results. Pay attention on time delay of 8 seconds.');


    var promisObj = {};
    promisObj.one = BPromise.resolve({x: 'From promise promisObj.one .'});
    promisObj.two = new BPromise(function (resolve, reject) {
        setTimeout(function () {
            resolve('From promise promisObj.two .');
        }, 8000);
    });
    promisObj.three = 'Some string'; //this is String value, not promise


    BPromise.props(promisObj)
        .then(function (valObj) { //will wait for promisArr[1] to get fulfilled state
            console.log('All promises are fulfilled after 8 seconds!');

            //echo values
            console.log(valObj.one.x);
            console.log(valObj.two);
            console.log(valObj.three);
        });

};
