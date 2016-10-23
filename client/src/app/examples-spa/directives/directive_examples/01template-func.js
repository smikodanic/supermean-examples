var stringify = require('json-stringify-safe'); //circular JSON

module.exports = function ($timeout) {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        replace: true,
        template: function (tElement, tAttrs) {
            // console.log(stringify(tElement, null, 2));

            //$timeout is needed because append() will not work until whole HTML is not compiled
            $timeout(function () {
                tElement.append('<p>Appended by <b>tElement.append()</b></p>');
            }, 600);

            return tAttrs.myHtml;
        }
    };

    return directiveObj;
};


/*
tElement
{
  "0": {},
  "context": {},
  "length": 1
}


tAttrs
{
  "$attr": {
    "myHtml": "my-html",
    "class": "class"
  },
  "$$element": {
    "0": {},
    "context": {},
    "length": 1
  },
  "myHtml": "<p>My HTML.</p>",
  "class": "pull-right"
}

 */
