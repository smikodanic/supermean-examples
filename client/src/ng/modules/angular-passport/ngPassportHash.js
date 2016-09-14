var ngPassportHash = require('../../../../../../mynpm/angular-passport/src/main.js').ngPassportHash;

/* configure */
ngPassportHash.constant('NGPASSPORT_CONF_HASH', {
    API_BASE_URL: 'http://192.168.1.101:9005',
    // API_BASE_URL: 'http://localhost:9005',
    API_AUTH_PATHNAME: '/examples/auth/passport/hashstrategy-gethash',
    URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/hash/page1',
    URL_AFTER_LOGOUT: '/examples-spa/login/hash/form'
});

module.exports = ngPassportHash;
