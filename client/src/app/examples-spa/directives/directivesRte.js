/* state: 'examples-spa_q'
 * url: /examples-spa/q
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/directives',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/directives/directives.html'
    };
};
