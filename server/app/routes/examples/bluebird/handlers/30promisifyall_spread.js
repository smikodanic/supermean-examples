/**
 * Route handler for:
 * GET /examples/bluebird/30promisifyall
 *
 * ***
 * Custom object 'myObj' which will be promisified with promisifyAll() .
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');


    var myObj = {
        listArr: function (arr, callback) {
            var err = null;
            var arr2 = arr.map(Math.sqrt);
            callback(err, arr2);
        }
    };


    BPromise.promisifyAll(myObj);

    myObj.listArrAsync([2, 3, 4]) //[x, y, z]
        .spread(function (x, y, z) { //also can be myObjBP.add2Async()...
            console.log("sqrt(x): ", x); //2
            console.log("sqrt(y): ", y); //3
            console.log("sqrt(z): ", z); //4
        });

};

/*
CONSOLE:
sqrt(x):  1.4142135623730951
sqrt(y):  1.7320508075688772
sqrt(z):  2
 */
