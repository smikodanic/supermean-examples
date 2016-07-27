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
    database: {
        mongodb: [
            {
                isActive: true, //true || false (if false then app will not use mongodb)
                default: true,
                uri: process.env.MONGODB_URI_1 || 'mongodb://supermean_user:smPass@127.0.0.1:27017/supermeandev',
                driver: 'mongoose'
            },
            {
                isActive: true,
                default: false,
                uri: process.env.MONGODB_URI_2 || 'mongodb://supermean_user:somePass@127.0.0.1:27017/supermeandev2',
                driver: 'mongoose'
            }
        ]

    }

};

module.exports = config;
