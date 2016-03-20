var config = {

		url: 'http://www.supermean.org',
    name: 'prod',
    server: {
        virtualHost: true,
        domain: 'www.nodeigniterjs.loc',
        port: process.env.PORT || 3000
    },
    mongodb: 'mongodb://user:pass@server.com:27017/db_name'

};

module.exports = config;