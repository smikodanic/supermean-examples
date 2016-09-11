/*global angular*/

/******************* CUSTOM MODULES *******************
 ******************************************************************/
require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js'); //ui.router
require('../../bower_components/angular-cookies/angular-cookies.min.js'); //ngCookies
// require('./ng/modules/angular-passport/ngPassportBasic'); //ngPassport.basicStrategy



/******************* APP MODULE *******************
 ******************************************************************/
var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies',
    'ngPassport.basicStrategy'
]);



/**************************** CONSTANT **************************
 ****************************************************************/
clientApp.constant('APPCONF', require('./ng/constant/APPCONF'));



/******************************************* CONFIG *******************************************
Only providers ($httpProvider) and constants can be injected into configuration blocks.
This is to prevent accidental instantiation of services before they have been fully configured.
 **********************************************************************************************/
clientApp.config(require('./ng/config/html5mode'));



/*********************************** RUN  ***********************************
Run on single page app start. For example on browser's reload.
Only instances ($http, $rootScope, someService) and constants can be injected into run blocks.
This is to prevent further system configuration during application run time.
 ****************************************************************************/
clientApp.run(function () {
    console.log('RUN on browser reload.');
});



/****************************** ROUTES ******************************
 ********************************************************************/
// clientApp.config(['$routeProvider', require('./ng/config/routes-ng')]); //ngRoute
clientApp.config(require('./ng/config/routes-ui')); //ui.router



/******************* CONTROLLERS *******************
 ***************************************************/
clientApp.controller('404Ctrl', require('./app/404/404Ctrl'));
clientApp.controller('Examples-spaCtrl', require('./app/examples-spa/examples-spaCtrl'));

//ui-router examples
clientApp.controller('StateControllerAliasCtrl', require('./app/examples-spa/uirouter/stateControllerAliasCtrl'));

//$q promise examples
clientApp.controller('QCtrl_creation', require('./app/examples-spa/q/qCtrl_creation'));
clientApp.controller('QCtrl_methods', require('./app/examples-spa/q/qCtrl_methods'));

//login examples
clientApp.controller('TopmenuCtrl', require('./app/examples-spa/login/_common/topmenu/topmenuCtrl'));
