/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, $http, APPCONF) {
    'use strict';


    //request some protected data from API by Basic Auth
    $scope.basicGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('basicGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                $scope.errMsg = err.data.message;
                console.error(JSON.stringify(err.data.stack, null, 2));
            });
    };


    //request some protected data from API by JWT Auth
    $scope.jwtGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/jwtstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('basicGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                $scope.errMsg = err.data.message;
                console.error(JSON.stringify(err.data.stack, null, 2));
            });
    };


    //request some protected data from API by Hash Auth
    $scope.hashGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/hashstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('basicGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                $scope.errMsg = err.data.message;
                console.error(JSON.stringify(err.data.stack, null, 2));
            });
    };


};
