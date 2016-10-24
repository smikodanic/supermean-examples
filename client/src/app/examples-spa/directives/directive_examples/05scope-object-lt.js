module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p style="color:Green">localModel in local scope: <input ng-model="localModel" placeholder="localModel"> {{localModel}}</p>',
        replace: true,
        scope: {localModel: '<attrVal'}
    };

    return directiveObj;
};
