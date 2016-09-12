/* state: 'examples-spa_login_form'
 * url: /examples-spa/login/form
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/basic/form',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/form/form.html'
            },
            'topmenu@examples-spa_login_basic_form': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/_common/topmenu/topmenu.html',
                controller: 'TopmenuBasicCtrl'
            }
        }
    };
};
