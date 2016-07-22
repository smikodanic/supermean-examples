/**
 * GET /examples/mongoose/29operationsdistinct
 *
 * *** distinct search
 * Returns array of strings.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //distinct field
    var field= 'str';

    //query object
    var queryObj = {str: /From/ig};


    operations
        .distinctDocAsync(field, queryObj)
        .then((resultsArr) => {
            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser:
[
  "From array 1 !",
  "From array 2 !",
  "From array 17 !",
  "From array 18 !"
]
 */
