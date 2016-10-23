module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        templateUrl: function(tElement, tAttrs) {
            return tAttrs.myTpl || 'green.html';
        }
    };

    return directiveObj;
};
