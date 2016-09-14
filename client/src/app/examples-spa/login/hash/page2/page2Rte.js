/* state: 'examples-spa_login_hash_page2'
 * url: /examples-spa/login/hash/page2
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/page2',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/page2/page2.html'
            },
            'topmenu@examples-spa_login_hash_page2': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        },

        authRequired: true

    };
};
