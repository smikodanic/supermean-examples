/* state: 'examples-spa_login_basic_page3'
 * url: /examples-spa/login/basic/page3
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/basic/page3',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/basic/page3/page3.html'
            },
            'topmenu@examples-spa_login_basic_page3': {
                templateUrl: '/client/dist/html/examples-spa/login/basic/_common/topmenu/topmenu.html',
                controller: 'TopmenuBasicCtrl'
            }
        },

        authRequired: false

    };
};
