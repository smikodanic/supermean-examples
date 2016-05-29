/**
 * Route handler for:
 * GET /examples/bluebird/08jointhenables
 *
 * ***
 * Promise.join(p1, p2,..., pn, fn) behaves like Promise.all([p1, p2, ..., pn]).spread(fn) except it's slightly faster.
 * This is useful for a fixed number of promises and is good for using promises as proxies:
 * var p1 = asyncOp();
 * var p2 = p1.then(otherOp);
 * var p3 = p2.then(oneMore);
 * Promise.join(p1, p2, p3, function(r1, r2, r3){ ... })
 *
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';

    //thenables to be joined pA,pB and pC
    var pA = BPromise.resolve({a: 'from promise A'});
    var pB = pA.then(function (valA) {
        valA.b = 'from promise B';
        return valA;
    });
    var pC = pB.then(function (valB) {
        valB.c = 'from promise C';
        return valB;
    });


    BPromise.join(pA, pB, pC, function (valA, valB, valC) {
        res.send('View console results!');
        console.log(valA); //{ a: 'from promise A', b: 'from promise B', c: 'from promise C' }
        console.log(valB); //{ a: 'from promise A', b: 'from promise B', c: 'from promise C' }
        console.log(valC); //{ a: 'from promise A', b: 'from promise B', c: 'from promise C' }
    });
/*
Notice:
This example shows that all results are joined before they are sent into join handler function (valA, valB, valC).
E.g. pA = pB = pC
 */
};
