/**
 * Route handler for:
 * GET /examples/bluebird/31promisify
 *
 * ***
 * Custom function 'myFunc' which will be promisified with promisify() method.
 *
 * Notice:
 * This method is simmilar to promisifyAll().
 * promisifyAll() --> promisification of all object's methods
 * promisify() --> promisification of function
 *
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



    //PROMISE solution
    var myFuncBP = BPromise.promisify(myFunc);

    myFuncBP(2, 3)
        .then(function (sum) { //also can be myObjBP.add2Async()...
            console.log("Async-SUM: ", sum); //5
        })
        .catch(function (err) {
            console.log("Async-ERR: ", err.message);
        });



    //CALLBACK solution
    var cb = function (err, sum) {
        if (err) {
            console.log("Sync-ERR: ", err);
        } else {
            console.log("Sync-SUM: ", sum);
        }
    };
    myFunc(4, 5, cb);


};

/*
CONSOLE:

Sync-SUM:  9
Async-SUM:  5
 */
