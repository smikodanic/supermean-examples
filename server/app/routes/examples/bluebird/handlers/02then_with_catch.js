/**
 * Route handler for:
 * GET /examples/bluebird/02thenwithcatch
 *
 * ***
 * .then(fulfilledHandler, rejectedHandler).catch()
 *
 * Catch will not work if 'rejectedHandler' is used.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    // create promise object
    var promis = new BPromise(function (resolve, reject) {

        var x;
        // x = 34; //comment this line to generate the error

        if (x) {
            resolve('x= ' + x);
        } else {
            reject('Error: x is ' + x); //Error: x is undefined
        }

    });



    promis
        .then(function (val) {
            res.send('Resolved value: ' + val); //Resolved value: 34
        }, function (err) {
            console.log('-- from rejectedHandler'); //works
            res.send('|from rejectedHandler| ' + err); //Error: x is undefined
        }).catch(function (err) {
            console.log('-- from catch'); //doesn't work
            res.send('|from catch| ' + err); //will not work
        });


};
