/**
 * GET /examples/mongoose/28operationscount
 *
 * *** count docs
 * Returns number which represent the amount of found documents.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //query object
    var queryObj = {str: /From/ig};

    operations
        .countDocsAsync(queryObj)
        .then((resultsNum) => {
            console.log('Result: \n' + JSON.stringify(resultsNum, null, 2));
            res.send('Result: <pre>' + JSON.stringify(resultsNum, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser:

resultsNum:
4
 */
