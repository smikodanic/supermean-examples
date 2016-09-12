/* state: 'examples-spa_login_basic_page1'
 * url: /examples-spa/login/basic/page1
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/basic/page1',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/page1/page1.html'
            },
            'topmenu@examples-spa_login_basic_page1': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/_common/topmenu/topmenu.html',
                controller: 'TopmenuBasicCtrl'
            }
        },

        authRequired: true

    };
};
