var config = {

    url: 'http://dev.supermean.org',
    name: 'dev',
    server: {
        virtualHost: false,
        domain: 'dev.nodeigniterjs.loc',
        port: process.env.PORT || 3001
    },
    mongodb: 'mongodb://user:pass@server.com:27017/db_name'

};

module.exports = config;