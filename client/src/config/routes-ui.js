/*global window*/
/**
 * App routes defined by ui-router.
 * https://github.com/angular-ui/ui-router
 *
 * Must have <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script> included in /server/app/views/clientApp.ejs.
 */


module.exports = function ($stateProvider, $urlRouterProvider) {
    'use strict';

    //For any unmatched url, redirect to /404 state
    $urlRouterProvider.when("/", function () {window.location.href = '/';}); //go to server-side
    $urlRouterProvider.when("/examples", function () {window.location.href = '/examples';}); //go to server-side
    $urlRouterProvider.otherwise("/404");
    $stateProvider.state('404', require('../routes-ui/404'));

    //spa examples
    $stateProvider.state('examples-spa', require('../routes-ui/examples-spa').indx); // url: /examples-spa
    $stateProvider.state('examples-spa/uirouter', require('../routes-ui/examples-spa').uirouter); // url: /examples-spa/uirouter


};
