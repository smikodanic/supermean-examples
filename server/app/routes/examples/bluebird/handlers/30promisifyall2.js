/**
 * Route handler for:
 * GET /examples/bluebird/30promisifyall2
 *
 * ***
 * This example shows 2 methods:
 * - add() which is sync and cannot be used with promisifyAll()
 * - add2() - which is async with callback and can be used with promisifyAll()
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');


    var myObj = {
        add: function (p1, p2) {
            return p1 + p2;
        },
        add2: function (p1, p2, callback) {
            callback(null, p1 + p2);
        }
    };



    //*** SYNC call to add method
    console.log("SYNC: " + myObj.add(3, 4)); //7



    //*** ASYNC
    var myObjAsync = BPromise.promisifyAll(myObj);

    // Async call to promisified add method -> nothing written to console
    myObjAsync.addAsync(2, 3).then(function (data) {
        console.log("ASYNC BAD: ", data);
        return data;
    });

    // Async call to promisified add2 method -> 5
    myObjAsync.add2Async(2, 3).then(function (data) {
        console.log("ASYNC: ", data); //5
        return data;
    });


};
