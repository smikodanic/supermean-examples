/**
 * Route handler for:
 * GET /examples/bluebird/33ascallback-bp-cb
 *
 * ***
 * Example which shows how to use promise and callback solution from same getDataFor() function.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var setPromis = function (word) {
        return BPromise.resolve(word);
    };

    function getDataFor(input, callback) {
        return setPromis(input).asCallback(callback);
    }


    //promise solution
    getDataFor('PROMISE SOLUTION')
        .then(function (x) {
            console.log(x);
        })
        .catch(function (err) {
            console.error('PErr: ', err.stack);
        });

    //callback solution
    getDataFor('CALLBACK SOLUTION', function (err, y) {
        if (err) {
            console.error('CErr:', err);
        }
        console.log(y);
    });



};

/*
CONSOLE:

PROMISE SOLUTION
CALLBACK SOLUTION
 */
