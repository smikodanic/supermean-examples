/**
 * Route handler for:
 * GET /examples/bluebird/11resolvepromise
 *
 * ***
 * BPromise.resolve(promise).then().catch()
 * - Create promise whoose resolved value comes from another promise 'promis2.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var promis2 = BPromise.resolve(88);

    BPromise.resolve(promis2)
        .then(function (val) {
            res.send('Resolved value: ' + val); // 88
            console.log(val); // 88
        })
        .catch(function (err) {
            console.log(err.message); //not working because promise has fulfilled state
        });


};
