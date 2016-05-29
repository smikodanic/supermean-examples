/**
 * Route handler for:
 * GET /examples/bluebird/14isrejected
 *
 * ***
 * var promis = BPromise.reject(new Error('My rejected error'));
 * promis.isRejected() //returns true or false
 * promis.reason() //gives rejected reason e.g Error: 'My rejected error'
 * promis.reason().message //gives rejected reason message e.g 'My rejected error'
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var promis = BPromise.reject(new Error('My rejected error'));

    promis
        .then(function (val) {
            console.log(val);
        })
        .catch(function (err) {
            var isrejct = promis.isRejected(); //true or false

            var msg;
            if (isrejct) {
                msg = '<b>A promise is rejected with reason:</b> ' + promis.reason().message;
            } else {
                msg = 'A promise is not rejected!';
            }

            res.send(msg);

        });


};
