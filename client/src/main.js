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



