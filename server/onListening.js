/**
 * Event listener for HTTP server "listening" event.
 */
module.exports = function (server) {
    'use strict';

    //onError callback function for server.on('listening', onListening);
    var onListening = function () {
        var addr = server.address();
        var bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;

        console.log('Listening on ' + bind);
    };

    return onListening;
};