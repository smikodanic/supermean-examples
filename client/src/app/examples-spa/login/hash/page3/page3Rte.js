/* state: 'examples-spa_login_hash_page3'
 * url: /examples-spa/login/hash/page3
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/page3',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/page3/page3.html'
            },
            'topmenu@examples-spa_login_hash_page3': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        },

        authRequired: false

    };
};
