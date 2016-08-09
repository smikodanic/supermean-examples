module.exports = function (clientApp) {
    'use strict';
    clientApp.controller('ExampleCtrl', function ($scope) {
        $scope.someVar = 'This is $scope variable value.';
    });
};