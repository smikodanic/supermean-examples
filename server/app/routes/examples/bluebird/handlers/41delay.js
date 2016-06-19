/**
 * Route handler for:
 * GET /examples/bluebird/41delay
 *
 * ***
 * Method delay() delays fullfiled promise, but rejected execute instantly and send error to catch().
 *
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    // var promis = BPromise.resolve('My resolved value!');
    var promis = BPromise.reject(new Error('My intentional error!'));

    BPromise
        .delay(5000, promis)
        .then((x) => console.log(x))
        .catch((e) => console.error(e.message));

};

/*
CONSOLE:

My resolved value! (on fulfillment will wait 5 secs)

OR

My intentional error! (on reject will not wait 5 secs)
 */
