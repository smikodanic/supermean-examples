/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth) {
    'use strict';


    $scope.basicLogin = function () {
        $scope.errMsg = '';

        basicAuth
            .checkCredentials($scope.username, $scope.password)
            .catch(function (err) {
                $scope.errMsg = err.data.message;
                console.error(err.data.stack);
            });

    };















};
