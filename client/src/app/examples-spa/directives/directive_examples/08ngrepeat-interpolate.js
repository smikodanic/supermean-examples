module.exports = function ($interpolate) {
    'use strict';

    console.log('\n\nEXAMPLE from 08compile-interpolate.js');

    var directiveObj = {
        restrict: 'A',
        template: '<p style="color:Navy">{{bar}} <br>{{foo}}</p> Open console!!!',
        replace: false,
        scope: false,
        // compile: function (tElem, tAttr) { //t = template
        //     console.log(tAttr.myAttrVal, ' ..compile');

        //     return {
        //         pre: function (scope, iElem, iAttr, controller) { //i = instance template
        //             console.log(iAttr.myAttrVal, ' ..pre');
        //         },
        //         post: function (scope, iElem, iAttr, controller) { //i = instance template
        //             console.log(iAttr.myAttrVal, ' ..post');
        //         }
        //     };
        // },
        controller: function ($scope, $element, $attrs) {
            //interpolation
            var v = $interpolate($attrs.myAttrVal)($scope);

            console.log(v, ' ..controller');
        }
    };

    return directiveObj;
};

/*
Without interpolate:
EXAMPLE from 08compile-interpolate.js
{{i}}  ..compile
{{i}}  ..controller
1  ..pre
1  ..post
{{i}}  ..controller
2  ..pre
2  ..post
{{i}}  ..controller
3  ..pre
3  ..post

CONCLUSION: 'i' is not interpreted in compile and controller because ng-repeat is nested directive.
 */

