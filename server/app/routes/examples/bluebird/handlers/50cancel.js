/**
 * Route handler for:
 * GET /examples/bluebird/50cancel
 *
 * ***
 * Cancel bluebird promise and call onCancel() function.
 *
 * Important:
 * ===============
 * Two conditions must be satisfied:
 * 1. Cancellation must be enabled: BPromise.config.cancellation = true
 * 2. Promise is in pending state: promis: "isFulfilled": false, "isRejected": false
 *
 */

const BPromise = require('bluebird');
BPromise.config({
    warnings: true,
    longStackTraces: true,
    cancellation: true, //must be true
    monitoring: true
});


module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var a = 5;
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

    //*** cancel here because inside then() will not work
    promis.cancel(); //promise cancellation (synchronous)

    promis
        .then(x => { //WILL NOT BE EXECUTED BECAUSE of PROMISE CANCELLATION!!!
            console.log('Before cancellation: ' + x);
            console.log(JSON.stringify(promis, null, 2));

            // promis.cancel(); //will not work becuse promise is in pending state and then() will not be exxecuted
            return 'Something returned!';
        })
        .then(y => { //WILL NOT BE EXECUTED BECAUSE of PROMISE CANCELLATION!!!
            console.log('After cancellation: ' + y);
            console.log(JSON.stringify(promis, null, 2));
        })
        .catch(e => console.error('Cancel err:' + e.message)) //or err.stack
        .finally(() => console.log('isCancelled(): ' + promis.isCancelled()));

};

/*
===| CONSOLE (a=5):

Promise is in pending status!
promis: {
  "isFulfilled": false,
  "isRejected": false
}
GET /examples/bluebird/50cancel 304 16.885 ms - -
Promise cancelled!!!
Cancel err:late cancellation observer
isCancelled(): true




====| CONSOLE (a=3):

  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": {}
}
Cancel err:My custom error: a is less then 5!
isCancelled(): false




===| CONSOLE (a=8):

promis: {
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "Smthing resolved!"
}
Before cancellation: Smthing resolved!
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "Smthing resolved!"
}
After cancellation: Something returned!
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": "Smthing resolved!"
}
isCancelled(): false
 */
