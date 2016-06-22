/**
 * Route handler for:
 * GET /examples/bluebird/58return
 *
 * ***
 * Return a value to next then()
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var external = 'Out of promise';

    BPromise.resolve('Smthing resolved!')
        .then(x => {
            console.log(x); //Smthing resolved!
            console.log(external); //Out of promise
        })
        .return('Smthing returned!!!')
        .then(y => console.log(y)) //Smthing returned!!!
        .return(function (external) {
            return external + ' added';
        }())
        .then(y => console.log(y)) //undefined added
        .catch(e => {
            console.error(e.message)
        });

};

/*
CONSOLE:

Smthing resolved!
Out of promise
Smthing returned!!!
undefined added
 */
