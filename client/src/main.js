/*global angular*/
var clientApp = angular.module('clientApp', [
    'ngRoute'
]);

//configuration
require('./config/html5mode.js')(clientApp);
require('./config/routes.js')(clientApp);


require('./controller_view')(clientApp);