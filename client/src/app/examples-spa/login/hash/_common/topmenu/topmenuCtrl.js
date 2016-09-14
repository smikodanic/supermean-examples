/**
 * Controller: TopmenuHashCtrl
 */
module.exports = function ($scope, $http, APPCONF) {
    'use strict';


    //request some protected data from API by Hash Auth
    $scope.hashGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/hashstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('hashGetsomedata\n', JSON.stringify(res, null, 2));
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
