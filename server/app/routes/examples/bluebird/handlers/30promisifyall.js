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

    //object to be promisified
    var myObj = {
        add2: function (p1, p2, callback) {
            var err = null;
            // var err = 'My intentional error!!!'; //uncomment this to make error
            var sum = p1 + p2;
            // var sum = [p1, p2, 21]; //array whiche can be used with spread()
            callback(err, sum);
        }
    };


    //PROMISE solution
    var myObjBP = BPromise.promisifyAll(myObj);

    myObjBP.add2Async(2, 3)
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
    myObj.add2(4, 5, cb);


};
