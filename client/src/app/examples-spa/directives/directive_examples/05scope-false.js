module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<span style="color:Brown">Values: <br><b style="color:red">{{parentScopeVar}}</b> <br><b style="color:purple">{{controllerVar}}</b> <br><input ng-model="childScopeVar" placeholder="childScopeVar"> {{childScopeVar}}</span>',
        replace: true,
        scope: false,
        controller: function ($scope) {
            $scope.controllerVar = 'Scope var defined inside controller: property.';
        }
    };

    return directiveObj;
};
