/**
 * Route handler for:
 * GET /examples/bluebird/06finally-new-promise
 *
 * ***
 * This example shopws how finally() can execute new created promise.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results!');

    var doFinally = function () {
        return BPromise
            .resolve(34)
            .then(function (val) {
                console.log(val);
                return 55;
            })
            .then(function (val2) {
                console.log(val2);
            });
    };


    BPromise.resolve(13)
        .then(function (val) {
            console.log(val); //13
            return 21;
        }).then(function (val2) {
            console.log(val2); //21
        }).catch(function (error) {
            res.send(error);
        }).finally(function () {
            doFinally(); //34, 55 (will be executed regardless reject() error)
        });


};

/*
CONSOLE OUTPUT:
13
21
34
55
 */
