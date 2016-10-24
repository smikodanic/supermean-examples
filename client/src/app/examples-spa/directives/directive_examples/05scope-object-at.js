module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<span style="color:Navy">isoScopeVar: {{isoScopeVar}} <br><br>controllerVar3: {{controllerVar3}}</b> <br> parentScopeVar: {{$parent.parentScopeVar}}</span>',
        replace: true,
        scope: {isoScopeVar: '@attrVal'},
        controller: function ($scope) {
            $scope.controllerVar3 = 'Scope var3 defined inside controller: property.';
        }
    };

    return directiveObj;
};
