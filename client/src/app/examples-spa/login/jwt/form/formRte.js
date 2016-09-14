/* state: 'examples-spa_login_jwt_form'
 * url: /examples-spa/login/jwt/form
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/form',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/form/form.html'
            },
            'topmenu@examples-spa_login_jwt_form': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        }
    };
};
