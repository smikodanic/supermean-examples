/**
 * Route handler for:
 * GET /examples/bluebird/31promisify-nodejs-dnslookup
 *
 * ***
 * promisification of NodeJS's dns.lookup() method.
 * Pay attention on multiArgs:true because callback in dns.lookup(hostname, callback) has more then 2 arguments.
 *
 */

const BPromise = require('bluebird');
const lookupBP = BPromise.promisify(require('dns').lookup, {multiArgs: true});

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var hostname = 'nodejs.org';

    //bluebird solution
    lookupBP(hostname)
        .spread((addresses, family) => console.logs('BPROMISE:', addresses + ' - ' + family))
        .catch((e) => console.error(e.stack)); //or e.message


};


/*
OUTPUT
BP: 104.20.22.46 - undefined
CB: 104.20.22.46 - 4
 */
