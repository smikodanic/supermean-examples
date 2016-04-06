var config = {

    url: 'http://www.supermean.org',
    name: 'prod',
    server: {
        virtualHost: true,
        domain: 'www.supermean.loc',
        port: process.env.PORT || 3000
    },
    gulpFile: 'gulpfile-pm2',
    mongodb: 'mongodb://user:pass@server.com:27017/db_name'

};

module.exports = config;