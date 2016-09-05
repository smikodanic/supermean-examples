/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth) {
    'use strict';


    $scope.basicLogin = function () {

        basicAuth.sendCredentials($scope.username, $scope.password)
            .then(function (respons) {
                if (respons.data.isSuccess) {
                    basicAuth.setCookie('authAPI', respons.data.putLocally);
                }


                console.log(JSON.stringify(respons, null, 2));
                setTimeout(function () {
                    console.log('KUKI \n' + JSON.stringify(basicAuth.getCookie('authAPI'), null, 2));
                }, 3000);

            }, function (err) {
                console.error(err);
            });

    };

};
