/* state: 'examples-spa_login_hash_page1'
 * url: /examples-spa/login/hash/page1
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/page1',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/page1/page1.html'
            },
            'topmenu@examples-spa_login_hash_page1': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        },

        authRequired: true

    };
};
