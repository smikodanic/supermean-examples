/**
 * Route handler for:
 * GET /examples/bluebird/33ascallback
 *
 * ***
 * Execute promise as callback in then() chain.
 * Usefull if we must execute some function as callback function inside then() chain.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    BPromise.resolve('Smthing resolved!')
        .asCallback(function (err, result) {
            console.log(result); //Smthing resolved!

            return 'Smthing returned from asCallback() method!'; //will not work e.g. will not be returned to then()
        })
        .then(function (data) {
            console.log(data); //Smthing resolved!

            return 'Smthing from then()!';
        })
        .then(function (data) {
            console.log(data); //Smthing from then()!
        });



};

/*
CONSOLE:

Smthing resolved!
Smthing resolved!
Smthing from then()!
 */
