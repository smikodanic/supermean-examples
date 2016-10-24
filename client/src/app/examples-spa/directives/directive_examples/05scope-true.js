module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<span style="color:Green">Value: <br><b style="color:red">{{parentScopeVar}}</b> <br><b style="color:purple">{{controllerVar2}}</b> <br><input ng-model="childScopeVar2" placeholder="childScopeVar2"> {{childScopeVar2}}</span>',
        replace: true,
        scope: true,
        controller: function ($scope) {
            $scope.controllerVar2 = 'Scope var2 defined inside controller: property.';
        }
    };

    return directiveObj;
};
