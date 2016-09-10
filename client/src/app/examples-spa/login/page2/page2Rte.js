/* state: 'examples-spa_login_page2'
 * url: /examples-spa/login/page2
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/page2',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/page2/page2.html'
            },
            'topmenu@examples-spa_login_page2': {
                templateUrl: '/client/dist/html/examples-spa/login/_common/topmenu/topmenu.html',
                controller: 'TopmenuCtrl'
            }
        },

        authRequired: true

    };
};
