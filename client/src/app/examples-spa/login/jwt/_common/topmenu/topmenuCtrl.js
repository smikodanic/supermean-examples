/**
 * Controller: TopmenuJWTCtrl
 */
module.exports = function ($scope, $http, APPCONF) {
    'use strict';


    //request some protected data from API by JWT Auth
    $scope.jwtGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/jwtstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('jwtGetsomedata\n', JSON.stringify(res, null, 2));
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
