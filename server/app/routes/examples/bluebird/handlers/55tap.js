/**
 * Route handler for:
 * GET /examples/bluebird/55tap
 *
 * ***
 * Tap is simmilar to then().
 * CAn receive and return a value.
 *
 */

const BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var a = 8;
    var promis = new BPromise((resolve, reject, onCancel) => {
        if (a > 5) {
            resolve('Smthing resolved!');
        } else if (a === 5) {
            console.log('Promise is in pending status!');
        } else {
            reject(new Error('My custom error: a is less then 5!'));
        }

        onCancel(function () { //will be executed when promise is cancelled
            console.log('Promise cancelled!!!');
        });
    });

    console.log('promis: ' + JSON.stringify(promis, null, 2));

    promis
        .tap(t1 => {
            console.log('TAPPED1:' + t1); //TAPPED1:Smthing resolved!
            return 'From TAP!'; //will not be returned into then()
        })
        .then(x => {
            console.log(x); //Smthing resolved!
            return 'From THEN';
        })
        .tap(t2 => {
            console.log('TAPPED2:' + t2); //TAPPED2:From THEN
        })
        .catch(e => {
            console.error(e.message)
        })
        .then(y => {
            console.log(y); //Smthing resolved!
            return 'From THEN';
        })
        .finally(f => console.log('FINALIZED:' + f));

};

/*
CONSOLE:

promis: {
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "Smthing resolved!"
}

TAPPED1:Smthing resolved!
Smthing resolved!
TAPPED2:From THEN
From THEN
FINALIZED:undefined

 */
