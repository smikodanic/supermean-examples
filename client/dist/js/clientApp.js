(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * $location in HTML5 mode
 *
 * Notice:
 * Dont forget <base> tag! (https://docs.angularjs.org/error/$location/nobase)
 */

module.exports = function (clientApp) {
    'use strict';
    clientApp.config(function ($locationProvider) {
        /* three modes defined */
        $locationProvider.html5Mode(true); //http://localhost:3000/example
        // $locationProvider.html5Mode(false).hashPrefix('!'); //http://localhost:3000/something#!/example
        // $locationProvider.html5Mode(false); //http://localhost:3000/something#/example
    });
};
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
/*global window*/
module.exports = function (clientApp) {
    'use strict';
    clientApp.controller('404Ctrl', function () {
        //redirect to server side /server/views/404.ejs
        window.location.href = '/404';
    });
};
},{}],4:[function(require,module,exports){
module.exports = function (clientApp) {
    'use strict';
    clientApp.controller('ExampleCtrl', function ($scope) {
        $scope.someVar = 'This is $scope variable value.';
    });
};
},{}],5:[function(require,module,exports){
module.exports = function (clientApp) {
    'use strict';
    require('./common/404/404Ctrl.js')(clientApp);

    require('./example/exampleCtrl.js')(clientApp);
};
},{"./common/404/404Ctrl.js":3,"./example/exampleCtrl.js":4}],6:[function(require,module,exports){
/*global angular*/
var clientApp = angular.module('clientApp', [
    'ngRoute'
]);

//configuration
require('./config/html5mode.js')(clientApp);
require('./config/routes.js')(clientApp);


require('./controller_view')(clientApp);
},{"./config/html5mode.js":1,"./config/routes.js":2,"./controller_view":5}]},{},[6]);
