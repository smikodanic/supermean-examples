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
            return 'Something returned imeditatelly!';
        })
        .then(y => console.log(y))
        .delay(5000)
        .then(() => console.log('Something after 5 secs'))
        .catch((e) => console.error(e.message));

};

/*
CONSOLE:

Something resolved!
Something returned imeditatelly!
Something after 5 secs //this is delayed 5 seconds.
 */
