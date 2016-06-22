/**
 * Route handler for:
 * GET /examples/bluebird/59throw
 *
 * ***
 * Throw an error and send to closest catch()
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    BPromise.resolve('Smthing resolved!')
        .then(x => console.log(x)) //Smthing resolved!
        .throw(new Error('My custom error!'))
        .then(y => console.log('then1: ' + y))
        .catch(e => console.error('catch1: ' + e.message))
        .then(y => console.log('then2: ' + y))
        .catch(e => console.error('catch2: ' + e.message));

};

/*
CONSOLE:

Smthing resolved!
catch1: My custom error!
then2: undefined
 */
