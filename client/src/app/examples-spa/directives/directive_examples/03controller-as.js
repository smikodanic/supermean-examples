module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p style="color:Green">{{sm.foo}} <br>{{bar}}</p>',
        replace: false,
        scope: {bar: '@attrValue'},
        controller: function () {
            this.foo = '-from ctrl';
        },
        controllerAs: 'sm'
    };

    return directiveObj;
};
