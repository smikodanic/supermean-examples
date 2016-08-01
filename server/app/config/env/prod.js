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
        mongodb: [ //first in the list is default server and will be started on nodejs startup
            {
                name: 'supermean',
                isActive: true, //true || false (if false then app will not use this mongodb)
                uri: process.env.MONGODB_URI_1 || 'mongodb://supermean_user:smPass@127.0.0.1:27017/supermean',
                driver: 'mongoose'
            },
            {
                name: 'supermean2',
                isActive: true,
                uri: process.env.MONGODB_URI_2 || 'mongodb://supermean_user:somePass@127.0.0.1:27017/supermean2',
                driver: 'mongoose'
            }
        ]

    }

};

module.exports = config;
