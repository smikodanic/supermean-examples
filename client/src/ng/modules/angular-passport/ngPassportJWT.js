var ngPassportJWT = require('angular-passport').ngPassportJWT;

/* configure */
ngPassportJWT.constant('NGPASSPORT_CONF_JWT', {
    // API_BASE_URL: 'http://192.168.1.101:9005',
    API_BASE_URL: 'http://localhost:9005',
    API_AUTH_PATHNAME: '/examples/auth/passport/jwtstrategy-gettoken',
    URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/jwt/page1',
    URL_AFTER_LOGOUT: '/examples-spa/login/jwt/form'
});

module.exports = ngPassportJWT;
