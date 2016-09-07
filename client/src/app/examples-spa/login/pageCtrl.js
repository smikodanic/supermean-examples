/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth, $state, $http, APPCONF) {
    'use strict';

    //show current state object
    // console.info('Current state \n', JSON.stringify($state.get($state.current.name), null, 2));

    /******** BASIC AUTHENTICATION ********/
    //click on login button
    $scope.basicLogin = function () {
        $scope.errMsg = '';

        basicAuth
            .login($scope.username, $scope.password, '/examples-spa/login/page1')
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = 'Bad API request: ' + APPCONF.API_BASE_URL + '/examples-spa/login/page1';
                }

            });

    };

    //request some protected data from API
    $scope.basicGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.data.msg;
                console.log('basicGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                console.error(JSON.stringify(err, null, 2));
            });
    };

















    $scope.logout = function () {
        basicAuth.logout('/examples-spa/login/pageform');
    };

};
