/**
 * Route handler for:
 * GET /examples/bluebird/33ascallback
 *
 * ***
 * Use {spread: true} when resolved value is an array.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    BPromise.resolve(['one', 2, 33])
        .asCallback(function (err, x, y, z) {
            console.log(x, y, z);
        }, {spread: true})
        .spread(function (a, b, c) {
            console.log(a, b, c);
        });

};

/*
CONSOLE:

one 2 33
one 2 33
 */
