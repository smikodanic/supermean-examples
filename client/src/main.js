/*global angular*/

var ngPassportBasic = require('../../../mynpm/angular-passport/src/main.js').ngPassportBasic;
ngPassportBasic.constant('NGPASSPORT_CONF', {
    // API_BASE_URL: 'http://192.168.1.101:9005',
    API_BASE_URL: 'http://localhost:9005',
    API_AUTH_PATHNAME: '/examples/auth/passport/basicstrategy',
    URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/page1',
    URL_AFTER_LOGOUT: '/examples-spa/login/pageform'
});


/******************* START APP AND LOAD MODULES *******************
 **********************************************/
require('../../bower_components/angular-cookies/angular-cookies.min.js');

var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies',
    'ngPassport.basicStrategy'
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

//protect API endpoints
clientApp.config(function ($httpProvider) {
    'use strict';
    $httpProvider.interceptors.push('interceptApiRequest');
});





/*********************************** RUN  ***********************************
Run on single page app start. For example on browser's reload.
Only instances ($http) and constants can be injected into run blocks.
This is to prevent further system configuration during application run time.
 ****************************************************************************/

//protect pages e.g. ui-router's states
clientApp.run(function ($rootScope, basicAuth) {
    'use strict';
    $rootScope.$on('$stateChangeSuccess', basicAuth.protectUIRouterState);
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
