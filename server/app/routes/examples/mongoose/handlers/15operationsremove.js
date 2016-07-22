/**
 * GET /examples/mongoose/15operationsremove'
 *
 * *** remove docs
 * This method removes all documents which satisfy queryObj
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //query object
    var queryObj = {str: {$not: /From/ig}}; //will delete all docs where 'str' doesn't contain 'From' string.

    operations
        .removeDocAsync(queryObj)
        .then((countObj) => {
            console.log('Delete from mongoDB: \n' + JSON.stringify(countObj, null, 2));
            res.send('Delete from mongoDB: <pre>' + JSON.stringify(countObj, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MongoDB four deleted docs:

countObj:
{
  "ok": 1,
  "n": 1
}
 */
