var ngPassportBasic = require('../../../../../../mynpm/angular-passport/src/main.js').ngPassportBasic;

/* configure */
ngPassportBasic.constant('NGPASSPORT_CONF_BASIC', {
    // API_BASE_URL: 'http://192.168.1.101:9005',
    API_BASE_URL: 'http://localhost:9005',
    API_AUTH_PATHNAME: '/examples/auth/passport/basicstrategy',
    URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/basic/page1',
    URL_AFTER_LOGOUT: '/examples-spa/login/basic/form'
});

module.exports = ngPassportBasic;
