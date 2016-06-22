/**
 ***** production environment
 * gulpFile: gulpfile-nodemon.js || gulpfile-pm2.js
 */
var config = {

    url: 'http://www.supermean.org',
    name: 'production',
    server: {
        virtualHost: false,
        domain: 'www.supermean.loc',
        port: process.env.PORT || 3001
    },
    gulpFile: 'gulpfile-nodemon',
    mongodb: 'mongodb://user:pass@server.com:27017/db_name'

};

module.exports = config;
