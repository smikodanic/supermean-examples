/**
 * Route handler for:
 * GET /examples/bluebird/13isfulfilled
 *
 * ***
 * var promis = BPromise.resolve('My resolved value');
 * promis.isFulfilled() //returns true or false
 * promis.value //gives resolved value e.g 'My resolved value'
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var promis = BPromise.resolve('My resolved value');

    promis
        .then(function (val) {
            var isff = promis.isFulfilled(); //true or false

            var msg;
            if (isff) {
                msg = '<b>A promise is fulfilled with value:</b> ' + promis.value();
            } else {
                msg = 'A promise is not fulfilled!';
            }

            res.send(msg);
        })
        .catch(function (err) {
            console.log(err.message);
        });


};
