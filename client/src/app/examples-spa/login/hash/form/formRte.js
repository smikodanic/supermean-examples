/* state: 'examples-spa_login_hash_form'
 * url: /examples-spa/login/hash/form
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/form',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/form/form.html'
            },
            'topmenu@examples-spa_login_hash_form': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        }
    };
};
