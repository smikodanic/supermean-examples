/* state: 'examples-spa_login_jwt_page2'
 * url: /examples-spa/login/jwt/page2
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/page2',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/page2/page2.html'
            },
            'topmenu@examples-spa_login_jwt_page2': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        },

        authRequired: true

    };
};
