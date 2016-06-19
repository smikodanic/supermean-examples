/**
 * Route handler for:
 * GET /examples/bluebird/30promisifyall-nodejs-dns
 *
 * ***
 * Promisification of NodeJS 'dns' module.
 *
 * Notice that promisifyAll() doesn't support callback with 3+ parameters. Only callback(err, data).
 * That's why we must use multiArgs: true and spread().
 * We should use multiArgs:true because 'dns.lookup' callback has 3 arguments: (err, addresses, family).
 *
 */

var BPromise = require('bluebird');
const dns = BPromise.promisifyAll(require('dns'), {multiArgs: true});

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var domain = 'nodejs.org';

    //callback solution
    dns.lookup(domain, (err, addresses, family) => {
        console.log('CALLBACK:', addresses + ' - ' + family); //CB: 104.20.22.46 - 4
    });


    //bluebird solution
    dns.lookupAsync(domain)
        .spread((addresses, family) => {
            console.log('BPROMISE:', addresses + ' - ' + family); //BP: 104.20.22.46 - 4
        }).catch((e) => {
            console.error(e.stack);
        });


};


/*
OUTPUT
BP: 104.20.22.46 - undefined
CB: 104.20.22.46 - 4
 */
