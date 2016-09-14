/*global window*/
/**
 * App routes defined by ui-router.
 * https://github.com/angular-ui/ui-router
 *
 * Must have
 *  <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
 * in /server/app/views/clientApp.ejs,
 *
 * or include it into /client/src/main.js
 *  require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js');
 */


module.exports = function ($stateProvider, $urlRouterProvider, APPCONF) {
    'use strict';


    /* ROUTES
     * Fetch with <a href="">
     * https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.router.$urlRouterProvider
     */
    $urlRouterProvider.when("/", function () {window.location.href = '/';}); //server-side route
    $urlRouterProvider.when("/examples", function () {window.location.href = '/examples';}); //server-side route
    $urlRouterProvider.otherwise("/404");
    $stateProvider.state('404', require('../../app/404/404Rte'));


    /* STATES
     * Fetch with <a ui-sref=""> or <a href="">
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider
     */
    $stateProvider.state('examples-spa', require('../../app/examples-spa/examples-spaRte')(APPCONF)); // url: /examples-spa
    $stateProvider.state('examples-spa_uirouter', require('../../app/examples-spa/uirouter/uirouterRte')(APPCONF)); // url: /examples-spa/uirouter
    $stateProvider.state('examples-spa_q', require('../../app/examples-spa/q/qRte')(APPCONF)); // url: /examples-spa/q
    $stateProvider.state('examples-spa_login', require('../../app/examples-spa/login/loginRte')(APPCONF)); // url: /examples-spa/login

    $stateProvider.state('examples-spa_login_basic_form', require('../../app/examples-spa/login/basic/form/formRte')(APPCONF)); // url: /examples-spa/login/basic/form
    $stateProvider.state('examples-spa_login_basic_page1', require('../../app/examples-spa/login/basic/page1/page1Rte')(APPCONF)); // url: /examples-spa/login/basic/page1
    $stateProvider.state('examples-spa_login_basic_page2', require('../../app/examples-spa/login/basic/page2/page2Rte')(APPCONF)); // url: /examples-spa/login/basic/page2
    $stateProvider.state('examples-spa_login_basic_page3', require('../../app/examples-spa/login/basic/page3/page3Rte')(APPCONF)); // url: /examples-spa/login/basic/page3

    $stateProvider.state('examples-spa_login_jwt_form', require('../../app/examples-spa/login/jwt/form/formRte')(APPCONF)); // url: /examples-spa/login/jwt/form
    $stateProvider.state('examples-spa_login_jwt_page1', require('../../app/examples-spa/login/jwt/page1/page1Rte')(APPCONF)); // url: /examples-spa/login/jwt/page1
    $stateProvider.state('examples-spa_login_jwt_page2', require('../../app/examples-spa/login/jwt/page2/page2Rte')(APPCONF)); // url: /examples-spa/login/jwt/page2
    $stateProvider.state('examples-spa_login_jwt_page3', require('../../app/examples-spa/login/jwt/page3/page3Rte')(APPCONF)); // url: /examples-spa/login/jwt/page3

    $stateProvider.state('examples-spa_login_hash_form', require('../../app/examples-spa/login/hash/form/formRte')(APPCONF)); // url: /examples-spa/login/hash/form
    $stateProvider.state('examples-spa_login_hash_page1', require('../../app/examples-spa/login/hash/page1/page1Rte')(APPCONF)); // url: /examples-spa/login/hash/page1
    $stateProvider.state('examples-spa_login_hash_page2', require('../../app/examples-spa/login/hash/page2/page2Rte')(APPCONF)); // url: /examples-spa/login/hash/page2
    $stateProvider.state('examples-spa_login_hash_page3', require('../../app/examples-spa/login/hash/page3/page3Rte')(APPCONF)); // url: /examples-spa/login/hash/page3





    /* ui.router examples */
    require('../../app/examples-spa/uirouter/examplesRte')($stateProvider, $urlRouterProvider);


};





