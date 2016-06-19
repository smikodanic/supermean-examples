/**
 * Route handler for:
 * GET /examples/bluebird/42timeout
 *
 * ***
 * Shows timeout message 'operation timed out' if promise is not fulfilled or rejected in a certain time.
 *
 * Notice: timeout() is convineant for use in loading very big files.
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var promis = new BPromise(function (reject, resolve) {}); //promise in pending status
    console.log('#1: ' + JSON.stringify(promis, null, 2));

    promis
        .timeout(5000, 'Promise not solved!')
        .then(x => console.log(x))
        .catch((e) => {
            console.log('#2: ' + JSON.stringify(promis, null, 2));
            console.error(e.message)
        });

};

/*
CONSOLE:

#1: {
  "isFulfilled": false,
  "isRejected": false
}


- and after 5 seconds timeout() and .catch() are executed


#2: {
  "isFulfilled": false,
  "isRejected": false
}
Promise not solved!

 */
