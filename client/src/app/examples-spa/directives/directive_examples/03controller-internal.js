module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p>{{myVar}}</p>',
        controller: function ($scope) {
            $scope.myVar = 'My var from internal controller!';
        }
    };

    return directiveObj;
};
