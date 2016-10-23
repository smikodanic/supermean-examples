module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p>{{myVar}}</p>',
        controller: 'DirectivesCtrl'
    };

    return directiveObj;
};
