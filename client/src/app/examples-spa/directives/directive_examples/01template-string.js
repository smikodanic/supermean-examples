module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        replace: true,
        template: '<p>Simple directive!!!</p>'
    };

    return directiveObj;
};
