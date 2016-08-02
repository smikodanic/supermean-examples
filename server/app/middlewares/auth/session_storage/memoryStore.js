/**
 * Storing session in memory (RAM)
 * (not recommended for production, althought it's express-seesion default)
 */

module.exports = function (session) {
    'use strict';
    var MemoryStore = require('session-memory-store')(session);
    var memoryStoreOptions = {
        expires: 3 * 60 * 60, //session will expires after 3 hours
        checkperiod: 10 * 60 //every 10 second check if session is expired
    };
    var storing = new MemoryStore(memoryStoreOptions);

    return storing;
};
