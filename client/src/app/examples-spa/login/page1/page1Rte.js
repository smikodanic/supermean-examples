/* state: 'examples-spa_login_page1'
 * url: /examples-spa/login/page1
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/page1',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/page1/page1.html'
            },
            'topmenu@examples-spa_login_page1': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/_common/topmenu/topmenu.html',
                controller: 'TopmenuCtrl'
            }
        },

        resolve: {
            authentication: function (basicAuth) {
                if (!basicAuth.isAuthenticated()) {
                    basicAuth.logout('/examples-spa/login/pageform');
                }
            }
        }

    };
};
