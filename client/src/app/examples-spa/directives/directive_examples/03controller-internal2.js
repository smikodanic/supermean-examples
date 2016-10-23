module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p>{{myVar2}}</p>',
        controller: function ($scope, $element, $attrs, $transclude, $timeout) {
            $scope.myVar2 = $attrs.varFromAttribute;

            $timeout(function () {
                $element.append('<b>Appended by $element.append()</b>');
            }, 600);

        }
    };

    return directiveObj;
};
