/*
 * environment dependant configuration: $export NODE_ENV=dev || $export NODE_ENV=production
 * config.server_manager = 'pm2' || 'nodemon'
 */

var config_env = require('./env/' + (process.env.NODE_ENV || 'dev'));
var auth_config = require('./auth.config.js');

var config = {
    app_name: 'SuperMEAN App',
    env: config_env,
    auth: auth_config
};

module.exports = config;
