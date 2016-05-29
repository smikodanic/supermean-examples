/**
 * Route handler for:
 * GET /examples/bluebird/07bind2
 *
 * ***
 * promisB.bind(promisA).then(...)
 * Bind 'this' to resolved value from promisA.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var promisA = BPromise.resolve({x: 'from promise A'});
    var promisB = BPromise.resolve('from promise B');

    promisB.bind(promisA)
        .then(function one(val) {
            res.send('Bind \'this\' to resolved value from promisA. <br> View results in console!');
            console.log('val= ', val); // from promise B
            console.log('this.x= ', this.x); // from promise A
        });

};
