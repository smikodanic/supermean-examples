var stringify = require('json-stringify-safe'); //circular JSON

module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'A',
        replace: true,
        template: function (tElem, tAttr) {
            // console.log(stringify(tAttr, null, 2));
            return tAttr.myRestrictA;
        },
        controller: function ($element, $timeout) {
            //wrap directive's element with <p style="font-size:21px;"></p>
            $timeout(function () {
                $element.wrap('<p style="font-size:21px;">$element.wrap() applied in controller!!!</p>');
            }, 600);
        }
    };

    return directiveObj;
};
