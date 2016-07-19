/**
 * GET /examples/mongoose/05middlewaresprepost'
 *
 * *** pre & post middleware example
 */
require('rootpath')();
var middlewarePrePost = require('server/app/models/examples/middlewarePrePost');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    //valid input
    var docInput = {
        str: 'Some string !!!',
        num: 33
    };

    middlewarePrePost
        .saveDocAsync(docInput)
        .then((data) => {
            console.log('Inserted into mongoDB: \n' + JSON.stringify(data, null, 2));
            res.send('Inserted into mongoDB: <pre>' + JSON.stringify(data, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Console output:
=== Pre1 save middleware executed.
===Next MD executed before save.
=== Post1 save middleware executed.
=== Post2.
Query took 8ms! - Started at: 1468761303313
Inserted into mongoDB:
{
  "__v": 0,
  "updated_at": "2016-07-17T13:15:03.312Z",
  "created_at": "2016-07-17T13:15:03.312Z",
  "str": "Some string !!!",
  "num": 33,
  "_id": "578b84d7b54edb6722c3bfa0"
}


MongoDB doc:
{
    "_id" : ObjectId("578b84d7b54edb6722c3bfa0"),
    "updated_at" : ISODate("2016-07-17T13:15:03.312+0000"),
    "created_at" : ISODate("2016-07-17T13:15:03.312+0000"),
    "str" : "Some string !!!",
    "num" : NumberInt(33),
    "__v" : NumberInt(0)
}


Browser window:
{
  "__v": 0,
  "updated_at": "2016-07-17T13:15:03.312Z",
  "created_at": "2016-07-17T13:15:03.312Z",
  "str": "Some string !!!",
  "num": 33,
  "_id": "578b84d7b54edb6722c3bfa0"
}
 */
