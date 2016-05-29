/**
 * Route handler for:
 * GET /examples/bluebird/07bind
 *
 * ***
 * .bind(thisObj)
 * Bind 'this' to the object 'thisObj'.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    var promis = BPromise.resolve('Some resolved value!');

    var obj = {
        a: 'Object property!',
        meth: function () {
            return 'Returned from object method!';
        }
    };

    promis.bind(obj) //bind 'this' to object 'obj'
        .then(function one(param) {
            res.send('View results in console!');
            console.log('param= ', param); // Some resolved value!
            console.log('this.a= ', this.a); // Object property!
            console.log('this.meth()= ', this.meth()); // Returned from object method!
        });

};
