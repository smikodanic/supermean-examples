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
        mongodb: [ //first in the list is default server and will be started on nodejs startup
            {
                name: 'supermean',
                isActive: true, //true || false (if false then app will not use this mongodb)
                uri: process.env.MONGODB_URI_1 || 'mongodb://supermean_user:smPass@5.189.161.70:27017/supermean',
                driver: 'mongoose'
            },
            {
                name: 'supermean2',
                isActive: true,
                uri: process.env.MONGODB_URI_2 || 'mongodb://supermean_user:smPass@5.189.161.70:27017/supermean2',
                driver: 'mongoose'
            }
        ]

    }

};

module.exports = config;
