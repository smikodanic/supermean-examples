/**
 * App routes defined by ngRoute.
 * https://docs.angularjs.org/api/ngRoute
 *
 * Must have <script src="/bower/angular-route/angular-route.min.js"></script> included.
 */


module.exports = function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/examples-spa', {
            templateUrl: '/client/dist/html/examples-spa/list.html',
            controller: 'ListCtrl'
        })
        .when('/404', {
            templateUrl: '/client/dist/html/common/404/404.html',
            controller: '404Ctrl'
        })
        .otherwise({
            redirectTo: '/404'
        });

};
