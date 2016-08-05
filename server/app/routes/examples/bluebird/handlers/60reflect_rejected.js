/**
 * Route handler for:
 * GET /examples/bluebird/60reflect
 *
 * ***
 *
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var promis = BPromise.reject(new Error('My custom err!'));

    promis
        .reflect() //makes promis to be fullfilled, and execute then instead of catch
        .then(y => {
            console.log('then1: ' + JSON.stringify(y, null, 2));
            console.log(JSON.stringify(promis, null, 2));
        })
        .catch(e => console.error('catch1: ' + e.message));

};

/*
CONSOLE:
then1: {
  "_bitField": 16777216,
  "_settledValueField": {}
}
{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": {}
}
 */
