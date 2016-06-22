/**
 ***** development environment
 * gulpFile: gulpfile-nodemon.js || gulpfile-pm2.js
 */
var config = {

    url: 'http://dev.supermean.org',
    name: 'development',
    server: {
        virtualHost: false,
        domain: 'dev.supermean.loc',
        port: process.env.PORT || 3005
    },
    gulpFile: 'gulpfile-nodemon.js',
    mongodb: 'mongodb://user:pass@server.com:27017/db_name'

};

module.exports = config;