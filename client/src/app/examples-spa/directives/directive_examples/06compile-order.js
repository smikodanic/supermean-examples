module.exports = function () {
    'use strict';

    console.log('EXAMPLE from 06compile-order.js');

    var directiveObj = {
        restrict: 'A',
        template: '<p style="color:Navy">{{bar}} <br>{{foo}}</p> Open console!!!',
        replace: false,
        scope: {bar: '@attrVal'},
        compile: function (tElem, tAttr) { //t = template
            console.log(tAttr.attrVal, ' ..compile');
            tElem.css('border', '1px solid orange');

            return {
                pre: function (scope, iElem, iAttr, controller) { //i = instance template
                    iElem.css('font-size', '21px');
                    console.log(iAttr.attrVal, ' ..pre');
                },
                post: function (scope, iElem, iAttr, controller) { //i = instance template
                    iElem.css('color', 'green');
                    console.log(iAttr.attrVal, ' ..post');
                }
            };
        },
        controller: function ($scope, $element, $attrs) {
            $element.css({'letter-spacing': '0.7em'});
            $scope.foo = 'This is from ctrl !!!';
            console.log($attrs.attrVal, ' ..controller');
        }
    };

    return directiveObj;
};

/*
Example shows execution order.


Smth from attr!  ..compile
Smth from attr!  ..controller
Smth from attr!  ..pre
Smth from attr!  ..post
 */
