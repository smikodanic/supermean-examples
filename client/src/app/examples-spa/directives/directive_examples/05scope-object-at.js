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


/*
 NOTICE: If you put scope: {isoScopeVar: '@'} then directive must be:
 <my-scope-obj-at iso-scope-var="Val from directive attribute!"></my-scope-obj-at>
 */
