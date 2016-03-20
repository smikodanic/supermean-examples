var app = require('./app');
var config = require('./app/config');
var http = require('http');
var port = config.env.server.port;


/**
 * Create HTTP server.
 */
var server = http.createServer(app);
server.listen(port);

// define virtual host (http://www.nodeigniterjs.loc:3000)
if (config.env.server.virtualHost) {
    var vhost = require('vhost');
    app.use(vhost(config.env.server.domain, app));
    console.log('Virtual host activated. ' + config.env.server.domain + ':' + port);
} else {
    console.log('Virtual host deactivated. ' + '127.0.0.1:' + port);
}

console.log('env variable: NODE_ENV=' + config.env.name);


/**
 * Event listener for HTTP server "error" event.
 */
var onError = function (error) {

    'use strict';

    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        console.error(error);
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
};


/**
 * Event listener for HTTP server "listening" event.
 */
var onListening = function() {
    'use strict';
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    // console.log('Listening on ' + bind);
};


/**
 * Listen on provided port, on all network interfaces.
 */
server.on('error', onError);
server.on('listening', onListening);