/* state: 'examples-spa'
 * url: /examples-spa
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/examples-spa.html',
        controller: 'Examples-spaCtrl'
    };
};
