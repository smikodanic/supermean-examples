/**
 * Route handler for:
 * GET /examples/bluebird/93globalvarinsidethen
 *
 * ***
 * This example shows that global var x can be used inside then().
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    res.send('View results in console.');


    var x = 21;
    var promis = BPromise.resolve('one');

    promis
        .then(function (val1) { //val1='one'
            console.log(x); //21
        })
        .catch(function (err) {
            console.log(err.message);
        });

};

/*
CONSOLE OUTPUT

21

*/
