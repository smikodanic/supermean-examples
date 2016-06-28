/**
 ***** production environment
 * gulpFile: gulpfile-nodemon.js || gulpfile-pm2.js
 */
var config = {

    url: 'http://www.supermean.org',
    name: 'prod',
    server: {
        virtualHost: false,
        domain: 'www.supermean.loc',
        port: process.env.PORT || 3001
    },
    gulpFile: 'gulpfile-nodemon.js',
    mongodb: 'mongodb://user:pass@server.com:27017/db_name'

};

module.exports = config;
