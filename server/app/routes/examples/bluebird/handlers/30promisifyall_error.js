/**
 * Route handler for:
 * GET /examples/bluebird/30promisifyall
 *
 * ***
 * Example with returning an error from callback.
 *
 * NOTICE:
 * var myObj = {
        add2: function (p1, p2, callback) {
            callback(err, data);
        }
    };
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');


    var myObj = {
        add2: function (p1, p2, callback) {
            callback('My intentional error!', p1 + p2); //will return error
        }
    };


    BPromise.promisifyAll(myObj);

    myObj.add2Async(2, 3)
        .then(function (data) {
            console.log("DATA: ", data); //5
        })
        .catch(function (err) {
            console.log(err.message);
        });


};

/*
CONSOLE OUTPUT:

My intentional error!
 */
