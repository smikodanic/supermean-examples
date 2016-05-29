/**
 * Route handler for:
 * GET /examples/bluebird/02then
 *
 * ***
 * .then(fulfilledHandler, rejectedHandler).then().then().catch();
 * Pay attention at throw new Error() !!!
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    // create promise object
    var promis = new BPromise(function (resolve, reject) {

        var x;
        x = 34; //comment this line to generate the error

        if (x) {
            resolve('x= ' + x);
        } else {
            reject('Error: x is ' + x); //Error: x is undefined
        }

    });



    promis
        .then(function (val1) {
            console.log('chain1: ' + val1); //chain1: x= 34
            res.send('val1: ' + val1); //val1: x= 34
            return 2; //send to val2
        }, function (err) {
            res.send(err); //Error: x is undefined
        }).then(function (val2) {
            console.log('chain2: ' + val2); //chain2: 2
            throw new Error('Throwed error!');
        }).then(function (val3) {
            console.log('chain3: ' + val3); //not executed
        }).catch(function (err) {
            console.log(err.message); //Throwed error!
        });


};
