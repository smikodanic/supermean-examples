/**
 ***** development environment
 * gulpFile: gulpfile-nodemon.js || gulpfile-pm2.js
 */
var config = {

    url: 'http://dev.supermean.org',
    name: 'dev',
    server: {
        virtualHost: false,
        domain: 'dev.supermean.loc',
        port: process.env.PORT || 3005
    },
    gulpFile: 'gulpfile-nodemon.js',
    mongodb: process.env.MONGODB || 'mongodb://supermean_user:smPass@127.0.0.1:27017/supermeandb-dev'

};

module.exports = config;
