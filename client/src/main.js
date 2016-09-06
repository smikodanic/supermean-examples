/*global angular*/

/******************* START APP AND LOAD MODULES *******************
 **********************************************/
require('../../bower_components/angular-cookies/angular-cookies.min.js');

var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies'
]);



/**************************** CONSTANT **************************
 ****************************************************************/
clientApp.constant('APPCONF', require('./config/constAPPCONF'));
// clientApp.constant('myMATH', require('./config/constantsMath'));



/******************************************* CONFIG *******************************************
Only providers ($httpProvider) and constants can be injected into configuration blocks.
This is to prevent accidental instantiation of services before they have been fully configured.
 **********************************************************************************************/
clientApp.config(require('./config/html5mode'));


/*********************************** RUN  ***********************************
Run this functions when clientApp is loaded. For example on browser load.
Only instances ($http) and constants can be injected into run blocks.
This is to prevent further system configuration during application run time.
 ****************************************************************************/
clientApp.run(function ($rootScope, basicAuth) {
    'use strict';
    $rootScope.$on('$stateChangeSuccess', basicAuth.onstateChangeSuccess);
});


/****************************** ROUTES ******************************
 ********************************************************************/
// clientApp.config(['$routeProvider', require('./config/routes-ng')]);
clientApp.config(require('./config/routes-ui'));



/******************* CONTROLLERS *******************
 ***************************************************/
clientApp.controller('404Ctrl', require('./app/_common/404/404Ctrl'));
clientApp.controller('ListSPAexamplesCtrl', require('./app/examples-spa/listSPAexamplesCtrl'));

//********* ui-router examples
clientApp.controller('StateControllerAliasCtrl', require('./app/examples-spa/uirouter/stateControllerAliasCtrl'));

//********* $q promise examples
clientApp.controller('ListQcreationCtrl', require('./app/examples-spa/q/listQcreationCtrl'));
clientApp.controller('ListQmethodsCtrl', require('./app/examples-spa/q/listQmethodsCtrl'));

//********* login examples
clientApp.controller('PageCtrl', require('./app/examples-spa/login/pageCtrl'));



/***************************** SERVICES ***************************
 ******************************************************************/
clientApp.factory('basicAuth', require('./lib/factory/basicAuth'));
clientApp.factory('base64', require('./lib/factory/base64'));
