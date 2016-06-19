/**
 * Route handler for:
 * GET /examples/bluebird/09try
 *
 * ***
 * BPromise.try(handler)
 * - Example with spread(). Notice that array is returned.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View results in console');

    BPromise.try(function () {
        return ["Hello", "World", "!"];
    }).spread(function (a, b, c) {
        console.log(a, b + c); // "Hello World!";
    });

};
