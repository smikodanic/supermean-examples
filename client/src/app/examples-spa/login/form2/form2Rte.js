/* state: 'examples-spa_login_form2'
 * url: /examples-spa/login/form2
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/form2',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/form2/form2.html'
            },
            'topmenu@examples-spa_login_form2': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/_common/topmenu/topmenu.html',
                controller: 'TopmenuCtrl'
            }
        }
    };
};
