/**
 * Route handler for:
 * GET /examples/bluebird/41delay-after-then
 *
 * ***
 * Method delay() can be used after then to slow down then() chain.
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    BPromise.resolve('Something resolved!')
        .then(x => {
            console.log(x);
            return 'Something returned after 5 secs!';
        })
        .delay(5000)
        .then(y => console.log(y))
        .catch((e) => console.error(e.message));

};

/*
CONSOLE:

Something resolved!
Something returned after 5 secs!
 */
