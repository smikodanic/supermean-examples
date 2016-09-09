/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, $http, APPCONF) {
    'use strict';


    //request some protected data from API
    $scope.basicGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.data.msg;
                console.log('basicGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                $scope.errMsg = err.data.message;
                console.error(JSON.stringify(err.data.stack, null, 2));
            });
    };


};
