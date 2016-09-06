/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth, $state) {
    'use strict';

    console.info('Current state \n', JSON.stringify($state.get($state.current.name), null, 2));


    $scope.basicLogin = function () {
        $scope.errMsg = '';

        basicAuth
            .login($scope.username, $scope.password, '/examples-spa/login/page1')
            .catch(function (err) {
                $scope.errMsg = err.data.message;
                console.error(err.data.stack);
            });

    };














    $scope.logout = function () {
        basicAuth.logout('/examples-spa/login/pageform');
    };

};
