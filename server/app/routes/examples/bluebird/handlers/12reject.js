/**
 * Route handler for:
 * GET /examples/bluebird/12reject
 *
 * ***
 * BPromise.reject(new Error('MY error')).then().catch()
 * - Create promise with rejected value.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var promis1 = BPromise.reject(new Error('My custom error!!!'))
        .then(function (val) {
            console.log(val); //not working because promise has rejected state
        })
        .catch(function (err) {
            res.send('Rejected value: ' + err.message); // My custom error!!!
            console.log(err.message);
            throw err; //with this promis1 is fulfilled: "isFulfilled": true, and err is sent to next catch()
            // return 'Something from catch'; //with this promis1 is fulfilled: "isFulfilled": true, and val is sent to first next then()
        })
        .then(function (val) {
            console.log(val); //[Error: My custom error!!!] or 'Something from catch'
        })
        .catch(function (err) {
            console.log('THROWN error from previous catch(): ' + err);
        });


    //non error will cause WARNING
    var promis2 = BPromise.reject('Just reason without error!'); //Warning: a promise was rejected with a non-error: [object String]
    promis2
        .then(function (val) {
            console.log(val); //not working because promise has rejected state
        })
        .catch(function (err) {
            console.log(err);
        });

    setTimeout(function () {
        console.log('promis1' + JSON.stringify(promis1, null, 2));
        console.log('promis2' + JSON.stringify(promis2, null, 2));
    }, 3000);


};
/*
Warning: a promise was rejected with a non-error: [object String]

My custom error!!!
Just reason without error!
[Error: My custom error!!!]

promis1{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": {}
}
promis2{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": "Just reason without error!"
}





############ NOTICE #############
promis1 is fulfilled what is wrong, so always break it into 2 pieces and use:

    var promis1 = BPromise.reject(new Error('My custom error!!!'));
    promis1.then()...catch();


 */
