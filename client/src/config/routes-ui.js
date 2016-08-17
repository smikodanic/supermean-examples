/*global window*/
/**
 * App routes defined by ui-router.
 * https://github.com/angular-ui/ui-router
 *
 * Must have <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script> included in /server/app/views/clientApp.ejs.
 */


module.exports = function ($stateProvider, $urlRouterProvider) {
    'use strict';

    /* ROUTES
     * Fetch with <a href="">
     * https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.router.$urlRouterProvider
     */
    $urlRouterProvider.when("/", function () {window.location.href = '/';}); //go to server-side
    $urlRouterProvider.when("/examples", function () {window.location.href = '/examples';}); //go to server-side
    $urlRouterProvider.otherwise("/404");
    $stateProvider.state('404', require('../routes-ui/404'));


    //******ui-router route examples (must be defined before states)
    $urlRouterProvider.when('/examples-spa/uirouter/urlrouteprovider-when1', function () {
        console.log('#1 --- From $urlRouterProvider.when() handler!');
    });
    $urlRouterProvider.when('/examples-spa/uirouter/urlrouteprovider-when2', function ($state) {
        $state.go('examples-spa_uirouter_urlrouteprovider-when2'); //redirect to state provider and load template
        console.log('#2 --- From $urlRouterProvider.when() handler!');
    });
    $urlRouterProvider.rule(function ($injector, $location) { //enables uppercase letters in URL (browser address bar)
        var path = $location.path();
        var normalized = path.toLowerCase();

        if (path !== normalized) {
            console.log("rule 1 is applied");
            return normalized;
        }
        return null;
    });







    /* STATES
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider
     */
    $stateProvider.state('examples-spa', require('../routes-ui/examples-spa').list); // url: /examples-spa
    $stateProvider.state('examples-spa_uirouter', require('../routes-ui/examples-spa_uirouter').list); // url: /examples-spa/uirouter
    $stateProvider.state('examples-spa_uirouter_urlrouteprovider-when2', require('../routes-ui/examples-spa_uirouter').urlrouteprovider_when2); // url: /examples-spa/uirouter/urlrouteprovider-when2
    $stateProvider.state('examples-spa_uirouter_urlrouteprovider-rule', require('../routes-ui/examples-spa_uirouter').urlrouteprovider_rule); // url: /examples-spa/uirouter/urlrouteprovider-rule


    //******ui-router state examples
    //This example shows usage of template, templateUrl and controller configs
    //// url: /examples-spa/uirouter/stateprovider-state-basic
    $stateProvider.state('examples-spa_uirouter_stateprovider-state-basic', {
        url: '/examples-spa/uirouter/stateprovider-state-basic',
        // template: 'Some <b style="color:Green">HTML</b> template! <br>{{myVar}}',
        templateUrl: '/client/dist/html/examples-spa/uirouter/stateprovider-state.html',
        controller: 'stateprovider-state-basicCtrl'
    });

    //This example shows usage of resolve
    //// url: /examples-spa/uirouter/stateprovider-state-resolve
    $stateProvider.state('examples-spa_uirouter_stateprovider-state-resolve', {
        url: '/examples-spa/uirouter/stateprovider-state-resolve',
        templateUrl: '/client/dist/html/examples-spa/uirouter/stateprovider-state.html',
        controller: 'stateprovider-state-resolveCtrl',
        resolve: {
            myResolvedVar1: function () {return 'Something resolved!!!';}
        }
    });


    //This example shows usage of views
    //// url: /examples-spa/uirouter/stateprovider-state-views
    $stateProvider.state('examples-spa_uirouter_stateprovider-state-views', {
        url: '/examples-spa/uirouter/stateprovider-state-views',
        templateUrl: '/client/dist/html/examples-spa/uirouter/stateprovider-state-views.html',
        controller: 'stateprovider-state-viewsCtrl',
        views: {
            'myHead@root': {
                controller: 'myHeadCtrl',
                templateUrl: '/client/dist/html/examples-spa/uirouter/stateprovider-state-views-myHead.html'
            },
            myFoot: {
                template: 'This is my foot'
            }
        }
    });

};
