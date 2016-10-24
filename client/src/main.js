/*global angular*/

/******************* CUSTOM MODULES *******************************
Notice:
    Can be also included in /server/app/views/clientApp.ejs if we don't want to merge everything inside main.js.
    For example:
    <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="/bower/angular-cookies/angular-cookies.min.js"></script>
    <script src="/assets/js/ngPassport.js"></script>
 ******************************************************************/
require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js'); //ui.router
require('../../bower_components/angular-cookies/angular-cookies.min.js'); //ngCookies
require('./ng/modules/angular-passport/ngPassportBasic'); //ngPassport.basicStrategy
require('./ng/modules/angular-passport/ngPassportJWT'); //ngPassport.JWTStrategy
// require('./ng/modules/angular-passport/ngPassportHash'); //ngPassport.HashStrategy



/******************* APP MODULE *******************
 ******************************************************************/
var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies',
    'ngPassport.basicStrategy',
    'ngPassport.JWTStrategy'
    // 'ngPassport.hashStrategy'
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
    'use strict';
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
clientApp.controller('TopmenuBasicCtrl', require('./app/examples-spa/login/basic/_common/topmenu/topmenuCtrl'));
clientApp.controller('TopmenuJWTCtrl', require('./app/examples-spa/login/jwt/_common/topmenu/topmenuCtrl'));
clientApp.controller('TopmenuHashCtrl', require('./app/examples-spa/login/hash/_common/topmenu/topmenuCtrl'));

//directives
clientApp.controller('DirectivesCtrl', require('./app/examples-spa/directives/directivesCtrl'));
clientApp.controller('ScopeParentCtrl', require('./app/examples-spa/directives/scopeParentCtrl'));



/******************* DIRECTIVES *******************
 **************************************************/
clientApp.directive('myTemplateString', require('./app/examples-spa/directives/directive_examples/01template-string'));
clientApp.directive('myTemplateFunc', require('./app/examples-spa/directives/directive_examples/01template-func'));
clientApp.directive('myTemplateurl', require('./app/examples-spa/directives/directive_examples/02templateurl'));
clientApp.directive('myTemplatenamespaceSvg', require('./app/examples-spa/directives/directive_examples/02templatenamespace-svg'));

clientApp.directive('myTemplateurlFunc', require('./app/examples-spa/directives/directive_examples/02templateurl-func'));
    //define default templates
clientApp.run(function ($templateCache) {
    'use strict';
    $templateCache.put('green.html', '<p style="color:green">green template</p>');
    $templateCache.put('red.html', '<p style="color:red">red template</p>');
});

clientApp.directive('myControllerExternal', require('./app/examples-spa/directives/directive_examples/03controller-external'));
clientApp.directive('myControllerInternal', require('./app/examples-spa/directives/directive_examples/03controller-internal'));
clientApp.directive('myControllerInternal2', require('./app/examples-spa/directives/directive_examples/03controller-internal2'));
clientApp.directive('myRestrictE', require('./app/examples-spa/directives/directive_examples/04restrict-e'));
clientApp.directive('myRestrictA', require('./app/examples-spa/directives/directive_examples/04restrict-a'));

clientApp.directive('myScopeFalse', require('./app/examples-spa/directives/directive_examples/05scope-false'));
clientApp.directive('myScopeTrue', require('./app/examples-spa/directives/directive_examples/05scope-true'));
clientApp.directive('myScopeObjAt', require('./app/examples-spa/directives/directive_examples/05scope-object-at'));
clientApp.directive('myScopeObjEq', require('./app/examples-spa/directives/directive_examples/05scope-object-eq'));
clientApp.directive('myScopeObjLt', require('./app/examples-spa/directives/directive_examples/05scope-object-lt'));
clientApp.directive('myScopeObjAnd', require('./app/examples-spa/directives/directive_examples/05scope-object-and'));
