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


    var promis = new BPromise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Some resolved value with time delay.');
        }, 8000);
    });

    var ispen = promis.isPending(); //true or false

    var msg;
    if (ispen) {
        msg = 'A promise is in pending state!';
    } else {
        msg = 'A promise is fulfilled or rejected!';
    }

    res.send(msg + '<br>See console results!!!');

    promis
        .then(function (val) {//will be executed after 8 seconds (wait 8sec in console)
            console.log(val);
        })
        .catch(function (err) {
            console.log(err.message);
        });

    console.log(JSON.stringify(promis, null, 2));
};
