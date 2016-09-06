/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth, $state) {
    'use strict';

    console.log(JSON.stringify($state.get('examples-spa_login_page1'), null, 2));


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
