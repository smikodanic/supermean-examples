module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'A',
        compile: function (tElem, tAttr) { //t = template
            tElem.css('border', '1px solid purple');

            //post-link function
            return function (scope, iElem, iAttr, controller) { //i = instance template
                iElem.css({color: 'purple', font: '15px Times'});
            };

        }
    };

    return directiveObj;
};
