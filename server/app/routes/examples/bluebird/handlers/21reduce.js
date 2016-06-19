/**
 * Route handler for:
 * GET /examples/bluebird/21reduce
 *
 * ***
 * BPromise.reduce(arr, function (accumulator, elemArr, indexArr, lengthArr) { ... }).then(function (accumulatedVal) { ... })
 * Reduces array into value by using accumulator.
 * Storing values in accumulator value in each array iteration.
 *
 * ***
 * This example has 2 iterations:
 * accumulator:1 element:3 index:1 length:3
 * accumulator:4 element:5 index:2 length:3
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results. Pay attention on time delay of 8 seconds.');


    var promisArr = [];
    promisArr[0] = BPromise.resolve(1); //1
    promisArr[1] = new BPromise(function (resolve, reject) { //3
        setTimeout(function () {
            resolve(3);
        }, 8000);
    });
    promisArr[2] = 5; //5


    BPromise.reduce(promisArr, function (acc, elem, ind, len) { //promisArr -> [1, 3, 5]
        console.log('accumulator:' + acc + ' element:' + elem + ' index:' + ind + ' length:' + len); //output to console each iteration
        return acc + elem;
    })
        .then(function (val) { //will wait for promisArr[1] to get fulfilled state
            console.log('All promises are fulfilled after 8 seconds!');

            console.log('result: ' + val); //result is 9 because  --1st iteration: 3+1=4  --2nd iteration: 5+4=9
            console.log('promisArr= ' + JSON.stringify(promisArr, null, 2));
        });

};


/*
result: 9


promisArr= [
  {
    "isFulfilled": true,
    "isRejected": false,
    "fulfillmentValue": 1
  },
  {
    "isFulfilled": true,
    "isRejected": false,
    "fulfillmentValue": 3
  },
  5
]

 */
