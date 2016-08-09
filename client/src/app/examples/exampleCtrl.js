module.exports = function (clientApp) {
    'use strict';
    clientApp.controller('ExampleCtrl', function ($scope) {
        console.log('workss');
        $scope.someVar = 'This is $scope variable value.';
    });
};
