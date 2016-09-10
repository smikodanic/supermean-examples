/* state: 'examples-spa_login'
 * url: /examples-spa/login
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/login.html'
    };
};
