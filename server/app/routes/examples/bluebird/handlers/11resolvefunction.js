/**
 * Route handler for:
 * GET /examples/bluebird/11resolvefunction
 *
 * ***
 * BPromise.resolve(fja()).then().catch()
 * - Create promise whoose resolved value is returned or thrown from function 'fja'.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var x = 153;
    var fja = function () {
        if (x < 5) {
            throw new Error('x must be greter then 5');
        }

        return x;
    };


    BPromise.resolve(fja())
        .then(function (val) {
            res.send('Resolved value: ' + val); // 153
            console.log(val); // 153
        })
        .catch(function (err) {
            console.log('CATCHED:: ' + err.message); //not working because promise has fulfilled state
        });

// Notice:
// When x = 3   BPromise.resolve(fja()) will throw an error which will NOT be caught by catch().
// So use BPromise.try(fja) !
};
