module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'A',
        link: {
            pre: function (scope, iElem, iAttr, controller) { //i = instance template
                iElem.css({color: 'blue', font: '15px Times'});
            },

            post: function (scope, iElem, iAttr, controller) { //i = instance template
                iElem.css('border', '2px dotted blue');
            }
        }




    };

    return directiveObj;
};
