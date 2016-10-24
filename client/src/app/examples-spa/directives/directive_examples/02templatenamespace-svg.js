module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow">',
        templateNamespace: 'svg',
        replace: true
    };

    return directiveObj;
};

/*
 NOTICE: If templateNamespace is not 'svg' circle will not be displayed! Also replace: true must be set up.
 */
