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

    var promis = new BPromise((resolv, rejec) => {});

    promis.reflect();

    console.log(JSON.stringify(promis, null, 2));

    promis
        .then(y => {
            console.log('then1: ' + y);
            console.log(JSON.stringify(promis, null, 2));
        })
        .catch(e => console.error('catch1: ' + e.message));

};

/*
CONSOLE:


 */
