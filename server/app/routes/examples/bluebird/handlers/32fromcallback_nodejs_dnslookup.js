/**
 * Route handler for:
 * GET /examples/bluebird/32fromcallback-nodejs-dnslookup
 *
 * ***
 * Example with NodeJS dns.lookup() method. Notice usage of multiArgs:true and spread().
 *
 * Notice: dns.lookup(hostname, callback) is NodeJS method (https://nodejs.org/api/dns.html#dns_dns_lookupservice_address_port_callback).
 */

const BPromise = require('bluebird');
const lookup = require('dns').lookup;

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var hostname = 'mozilla.org';

    BPromise
        .fromCallback(cb => lookup(hostname, cb), {multiArgs: true})
        .spread((addresses, family) => console.log(hostname, addresses + ' - ' + family))
        .catch((e) => console.error(e.stack));

};

/*
CONSOLE:

mozilla.org 63.245.215.20 - 4

 */
