module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<button ng-click="localFunc()">CLICK Me</button>',
        replace: true,
        scope: {localFunc: '&attrVal'}
    };

    return directiveObj;
};
