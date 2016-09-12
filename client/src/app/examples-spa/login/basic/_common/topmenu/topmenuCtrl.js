/**
 * Controller: TopmenuBasicCtrl
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
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = '500 Internal API Server Error';
                }
            });
    };


};
