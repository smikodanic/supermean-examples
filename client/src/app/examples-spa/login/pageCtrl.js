/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth) {
    'use strict';


    $scope.basicLogin = function () {
        $scope.errMsg = '';

        basicAuth
            .login($scope.username, $scope.password, '/examples-spa/login/page1')
            .catch(function (err) {
                $scope.errMsg = err.data.message;
                console.error(err.data.stack);
            });

    };















};
