/**
 * Define app routes
 */
module.exports = function (clientApp) {
    'use strict';
    clientApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/example', {
            templateUrl: '/client/dist/html/example/example.html',
            controller: 'ExampleCtrl'
        }).when('/404', {
            templateUrl: '/client/dist/html/common/404/404.html',
            controller: '404Ctrl'
        }).otherwise({
            redirectTo: '/404'
        });
    }]);
};