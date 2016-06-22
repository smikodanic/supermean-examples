/**
 * Route handler for:
 * GET /examples/bluebird/73agregateerror
 *
 * ***
 *
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var err = new BPromise.AggregateError();
    err.push(new Error("first error"));
    err.push(new Error("second error"));


    BPromise.reject(err)
        .then()
        .catch(BPromise.AggregateError,
            e => {
                console.error('e.message: ' + e.message); //aggregate error
                console.error('e.length: ' + e.length); //2
                console.error('e[0].message: ' + e[0].message); //first error
                console.error('e[1].message: ' + e[1].message); //second error
        });


};

/*
CONSOLE:

e.message: aggregate error
e.length: 2
e[0].message: first error
e[1].message: second error
 */
