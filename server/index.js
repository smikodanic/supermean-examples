/**
 * Main server file
 */

var config = require('./app/config');
var app = require('./app');
var port = config.env.server.port;


//create HTTP server
var server = require('http').createServer(app);
server.listen(port);


//server events
server.on('error', require('./onError.js')(port));
// server.on('listening', require('./onListening.js')(server));