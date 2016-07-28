/**
 * Route handler for:
 * GET /examples/bluebird/09try-next
 *
 * ***
 * Catch err from next(err)
 */

const BPromise = require('bluebird');

module.exports = function (err, req, res, next) {
    'use strict';
    res.send('View results in console').end();


    BPromise
        .try(function () {
            if (err) throw err;
        })
        .then(function (valFromNext) {
            console.log('VALnext: ' + valFromNext);
        })
        .catch(function (errFromNext) {
            console.log('ERRORnext: ' + errFromNext.message);
        });

};
