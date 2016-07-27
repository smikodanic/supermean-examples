/**
 * Route handler for:
 * GET /examples/bluebird/04catch
 *
 * ***
 * .catch()
 * Any exception happening in a .then-chain will propagate to nearest .catch handler.
 *
 * Notice: .catch() will not break .then() chain after it. Fore example .catch().then(function () { ...continue with execution... })
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


    // catch-all example
    promis
        .catch(function (err) { //catch-all
            console.log('CATCH-ALL1: ' + err); //TypeError: console.lag is not a function

        }).then(function (val1) {
            res.send('View results in console!');
            console.lag('val1: ' + val1); //error because of 'lag'

        }).catch(function (err) { //catch-all
            console.log('CATCH-ALL2: ' + err); //TypeError: console.lag is not a function

        });


    // chaining of catch() methods with TypeError and ReferenceError filters
    BPromise.resolve('55')
        .then(function (val1) {
            console.log('val1: ' + val1); //val1: 55

            // var a = undefinedVariable; //intentional ReferenceError

            throw new ReferenceError('Hello', 'someFile.js', 10); //ReferenceError(message, fileName, lineNumber);

        }).catch(TypeError, function (err) { //catch with TypeError filter
            console.log('TYPEERROR CATCH: ' + err); //will not work because of ReferenceError

        }).catch(ReferenceError, function (err) { //catch with ReferenceError filter
            console.log('RefErr' + JSON.stringify(err, null, 2)); //{}
            console.log(err); //[ReferenceError: Hello]
            console.log('REFERENCEERROR CATCH: ' + err.message + ' | ' + err.fileName + ' | ' + err.lineNumber); //REFERENCEERROR CATCH: Hello | undefined | undefined

        }).catch(function (err) {
            console.log('CATCH' + err);
        });


};
