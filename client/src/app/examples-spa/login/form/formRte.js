/* state: 'examples-spa_login_form'
 * url: /examples-spa/login/form
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/form',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/form/form.html'
            },
            'topmenu@examples-spa_login_form': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/_common/topmenu/topmenu.html',
                controller: 'TopmenuCtrl'
            }
        }
    };
};
