/*global angular*/
var clientApp = angular.module('clientApp', [
    'ngRoute'
]);

//configuration
clientApp.config(require('./config/html5mode.js'));
clientApp.config(['$routeProvider', require('./config/routes-ng.js')]);


require('./app')(clientApp);
