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
 * Controller: ListCtrl
 */
module.exports = function ($scope) {
    'use strict';

    console.log('workss');
    $scope.someVar = 'This is $scope variable value.';
};

},{}],3:[function(require,module,exports){
//application constants (configuration file)
module.exports = {

    API_BASE_URL: 'http://uniapi.com'


};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
/**
 * App routes defined by ui-router.
 * https://github.com/angular-ui/ui-router
 *
 * Must have <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script> included in /server/app/views/clientApp.ejs.
 */


module.exports = function ($stateProvider, $urlRouterProvider) {
    'use strict';
    //For any unmatched url, redirect to /404 state
    $stateProvider.state('404', require('../routes-ui/404'));
    $urlRouterProvider.otherwise("/404");

    $stateProvider.state('examples-spa', require('../routes-ui/examples-spa').indx);


};

},{"../routes-ui/404":7,"../routes-ui/examples-spa":8}],6:[function(require,module,exports){
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
clientApp.controller('ListCtrl', require('./app/examples-spa/listCtrl'));




},{"./app/_common/404/404Ctrl":1,"./app/examples-spa/listCtrl":2,"./config/constants":3,"./config/html5mode":4,"./config/routes-ui":5}],7:[function(require,module,exports){
module.exports = {
    url: '/404',
    templateUrl: '/client/dist/html/_common/404/404.html',
    controller: '404Ctrl'
};

},{}],8:[function(require,module,exports){
module.exports.indx = {
    url: '/examples-spa',
    templateUrl: '/client/dist/html/examples-spa/list.html',
    controller: 'ListCtrl'
};

},{}]},{},[6]);
