/**
 * Route handler for:
 * GET /examples/bluebird/31promisify
 *
 * ***
 * A function 'myFunc' which has 4 arguments and must have multiArgs:true .
 * (err, p1, p2, sum)
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    //object to be promisified
    var myFunc = function (p1, p2, callback) {
        var err = null;
        // var err = 'My intentional error!!!'; //uncomment this to make error
        var sum = p1 + p2;
        callback(err, p1, p2, sum); //callback with 4 arguments
    };



    //PROMISE solution
    var myFuncBP = BPromise.promisify(myFunc, {multiArgs: true}); //multiArgs:true because callback has 4 arguments instead of 2

    myFuncBP(2, 3)
        .spread(function (x, y, suma) {
            console.log("Async-SUM: ", x, '+', y, '=', suma); //5
        })
        .catch(function (err) {
            console.log("Async-ERR: ", err.message);
        });

};

/*
CONSOLE:
Async-SUM:  2 + 3 = 5
 */

/*
CONSOLE (When err is not null!):
Async-ERR:  My intentional error!!!
 */
