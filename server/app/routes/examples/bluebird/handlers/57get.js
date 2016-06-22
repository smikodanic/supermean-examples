/**
 * Route handler for:
 * GET /examples/bluebird/57get
 *
 * ***
 * Get object property or array element.
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    BPromise.resolve({one: 1, two: 'dva'})
        .get('two') //catch 'dva'
        .then(x => console.log(x))
        .then(() => {return ['a', 125, '3']})
        .get(1) //catch 125
        .then(y => console.log(y))
        .catch(e => {
            console.error(e.message)
        });

};

/*
CONSOLE:

dva
125
 */
