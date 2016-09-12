/* state: 'examples-spa_login_jwt_page1'
 * url: /examples-spa/login/jwt/page1
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/page1',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/page1/page1.html'
            },
            'topmenu@examples-spa_login_jwt_page1': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        },

        authRequired: true

    };
};
