/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth) {
    'use strict';


    $scope.basicLogin = function () {

        basicAuth.sendCredentials($scope.username, $scope.password)
            .then(function (respons) {
                console.log(JSON.stringify(respons, null, 2));
            }, function (err) {
                console.error(err);
            });

    };

};
