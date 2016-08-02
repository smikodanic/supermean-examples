/**
 * Storing session in file (hard drive)
 *
 */

module.exports = function (session) {
    'use strict';
    var FileStore = require('session-file-store')(session);
    var fileStoreOptions = {
        path: 'server/tmp/session', //directory where sessions will be stored
        ttl: 3 * 60 * 60, //session will expires after 3 hours
        logFn: console.log //logging function
    };
    var storing = new FileStore(fileStoreOptions);

    return storing;
};
