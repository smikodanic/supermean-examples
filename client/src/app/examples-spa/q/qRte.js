/* state: 'examples-spa_q'
 * url: /examples-spa/q
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/q',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/q/q.html'
    };
};
