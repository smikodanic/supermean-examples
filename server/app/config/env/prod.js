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
    database: {
        mongodb: {
            isActive: true, //true || false (if false then website will not use mongodb)
            uri: process.env.MONGODB_URI || 'mongodb://supermean_user:smPass@127.0.0.1:27017/supermean
        }
    }

};

module.exports = config;
