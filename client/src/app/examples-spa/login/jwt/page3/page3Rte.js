/* state: 'examples-spa_login_jwt_page3'
 * url: /examples-spa/login/jwt/page3
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/page3',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/page3/page3.html'
            },
            'topmenu@examples-spa_login_jwt_page3': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        },

        authRequired: false

    };
};
