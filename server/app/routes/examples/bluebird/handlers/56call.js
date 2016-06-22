/**
 * Route handler for:
 * GET /examples/bluebird/56call
 *
 * ***
 * Call JS function and returned values from that function will be sent to next then().
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');


    var val;

    BPromise.resolve([1, 4, 9])
        .call('map', (elem) => Math.sqrt(elem))
        .spread((x, y, z) => {
            console.log(x);
            console.log(y);
            console.log(z);
        })
        .catch(e => {
            console.error(e.message)
        });

};

/*
CONSOLE:

1
2
3
 */
