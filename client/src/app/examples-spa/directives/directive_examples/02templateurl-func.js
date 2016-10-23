var stringify = require('json-stringify-safe'); //circular JSON

module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        templateUrl: function(tElement, tAttrs) {
            // console.log(stringify(tAttrs, null, 2));
            return tAttrs.myTpl || 'green.html';
        }
    };

    return directiveObj;
};
