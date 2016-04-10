/**
 * Event listener for HTTP server "error" event.
 */

var chalk = require('chalk');

module.exports = function (port) {
    'use strict';

    //onError callback function for server.on('error', onError);
    var onError = function (error) {

        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = (typeof port === 'string')
            ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            console.error(error);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(chalk.red(bind + ' is already in use'));
            process.exit(1);
            break;
        default:
            throw error;
        }
    };

    return onError;
};