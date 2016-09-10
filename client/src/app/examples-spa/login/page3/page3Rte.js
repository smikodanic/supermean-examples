/* state: 'examples-spa_login_page3'
 * url: /examples-spa/login/page3
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/page3',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/page3/page3.html'
            },
            'topmenu@examples-spa_login_page3': {
                templateUrl: '/client/dist/html/examples-spa/login/_common/topmenu/topmenu.html',
                controller: 'TopmenuCtrl'
            }
        },

        authRequired: false

    };
};
