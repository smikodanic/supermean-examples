/**
 * Route handler for:
 * GET /examples/bluebird/32fromcallback
 *
 * ***
 * Retruns 'err' or 'sum' from function's callback and send it to then() or catch().
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    //function to be promisified
    var myFunc = function (p1, p2, callback) {
        var err = null;
        // var err = 'My intentional error!!!'; //uncomment this to make error
        var sum = p1 + p2;
        // var sum = [p1, p2, 21]; //array which can be used with spread()
        callback(err, sum);
    };



    BPromise.fromCallback((cb) => {
        myFunc(2, 3, cb);
    }).then(function (sum) {
        console.log("Async-SUM: ", sum); //5
    }).catch(function (err) {
        console.log("Async-ERR: ", err.message);
    });



};

/*
CONSOLE:

Async-SUM:  5
 */
