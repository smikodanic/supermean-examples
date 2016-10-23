module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'EAC',
        replace: true,
        template: '<p style="color:Green"><b>restrict: "EAC", replace: true</b></p>'
    };

    return directiveObj;
};
