/*!
 * SuperMEAN v0.1.0 (http://www.supermean.org)
 * Copyright 2014-2016 Sasa Mikodanic
 * Licensed under MIT 
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global window*/

/**
 * Controller: 404Ctrl
 */
module.exports = function () {
    'use strict';
    //redirect to server side /server/views/404.ejs
    window.location.href = '/404';
};

},{}],2:[function(require,module,exports){
/**
 * Controller: examples-spa_listCtrl
 */
module.exports = function ($scope) {
    'use strict';

    console.log('SPA List Examples');
};

},{}],3:[function(require,module,exports){
/* Controller: stateprovider-state-basicCtrl*/
module.exports.basic = function ($scope) {
    'use strict';

    $scope.myVar = 'myVar from $scope !'
    console.log('stateprovider-state-basicCtrl works!!!');
};

/* Controller: stateprovider-state-resolveCtrl*/
module.exports.resolve = function ($scope, myResolvedVar1) {
    'use strict';

    $scope.myVar = myResolvedVar1;
    console.log(JSON.stringify(myResolvedVar1, null, 2));
};


/* Controller: stateprovider-state-viewsCtrl*/
module.exports.views = function ($scope) {
    'use strict';
    console.log('Multi View Page !!!');

};

},{}],4:[function(require,module,exports){
//application constants (configuration file)
module.exports = {

    API_BASE_URL: 'http://uniapi.com'


};

},{}],5:[function(require,module,exports){
/**
 * $location in HTML5 mode
 *
 * IMPORTANT:
 * Dont forget <base> tag! (https://docs.angularjs.org/error/$location/nobase)
 */

module.exports = function ($locationProvider) {
    'use strict';
    /* three modes defined */
    $locationProvider.html5Mode(true); //http://localhost:3000/example
    // $locationProvider.html5Mode(false).hashPrefix('!'); //http://localhost:3000/something#!/example
    // $locationProvider.html5Mode(false); //http://localhost:3000/something#/example
};

},{}],6:[function(require,module,exports){
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

},{"../routes-ui/404":8,"../routes-ui/examples-spa":9,"../routes-ui/examples-spa_uirouter":10}],7:[function(require,module,exports){
/*global angular*/
var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router'
]);


// CONFIG
clientApp.constant('APPCONF', require('./config/constants'));
clientApp.config(require('./config/html5mode'));


// ROUTES
// clientApp.config(['$routeProvider', require('./config/routes-ng')]);
clientApp.config(require('./config/routes-ui'));




// CONTROLLERS
clientApp.controller('404Ctrl', require('./app/_common/404/404Ctrl'));
clientApp.controller('examples-spa_listCtrl', require('./app/examples-spa/listCtrl'));
clientApp.controller('stateprovider-state-basicCtrl', require('./app/examples-spa/uirouter/stateprovider-stateCtrl').basic);
clientApp.controller('stateprovider-state-resolveCtrl', require('./app/examples-spa/uirouter/stateprovider-stateCtrl').resolve);
clientApp.controller('stateprovider-state-viewsCtrl', require('./app/examples-spa/uirouter/stateprovider-stateCtrl').views);




},{"./app/_common/404/404Ctrl":1,"./app/examples-spa/listCtrl":2,"./app/examples-spa/uirouter/stateprovider-stateCtrl":3,"./config/constants":4,"./config/html5mode":5,"./config/routes-ui":6}],8:[function(require,module,exports){
module.exports = {
    url: '/404',
    templateUrl: '/client/dist/html/_common/404/404.html',
    controller: '404Ctrl'
};

},{}],9:[function(require,module,exports){
/* state: 'examples-spa'
 * url: /examples-spa
 ************************/
module.exports.list = {
    url: '/examples-spa',
    templateUrl: '/client/dist/html/examples-spa/list.html',
    controller: 'examples-spa_listCtrl'
};

},{}],10:[function(require,module,exports){
/* state: 'examples-spa_uirouter'
 * url: /examples-spa/uirouter
 ************************/
module.exports.list = {
    url: '/examples-spa/uirouter',
    templateUrl: '/client/dist/html/examples-spa/uirouter/list.html'
};

/* state: 'examples-spa_uirouter_urlrouteprovider-when2'
 * url: /examples-spa/uirouter/urlrouteprovider-when2
 ************************/
module.exports.urlrouteprovider_when2 = {
    url: '/examples-spa/uirouter/urlrouteprovider-when2',
    template: 'Template comes from stateProvider!'
};

/* state: 'examples-spa_uirouter_urlrouteprovider-rule'
 * url: /examples-spa/uirouter/urlrouteprovider-rule
 ************************/
module.exports.urlrouteprovider_rule = {
    url: '/examples-spa/uirouter/urlrouteprovider-rule',
    template: 'Can use uppercase or lowercase letters in URL! Click on this: <a href="/examples-spa/uirouter/urlrouteprovider-RULE">/examples-spa/uirouter/urlrouteprovider-RULE</a> will not change anything.'
};

},{}]},{},[7]);
