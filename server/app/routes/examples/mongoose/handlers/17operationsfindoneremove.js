/**
 * GET /examples/mongoose/17operationsfindoneremove'
 *
 * *** remove one doc
 * Removing first document found by queryobj.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    var queryObj = {str: /From/ig};


    operations
        .removeOneAsync(queryObj)
        .then((deletedDoc) => {
            console.log('Deleted from mongoDB: \n' + JSON.stringify(deletedDoc, null, 2));
            res.send('Deleted from mongoDB: <pre>' + JSON.stringify(deletedDoc, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser window:

deletedDoc:
{
  "_id": "5790ca411dcb9c5c17f4ea27",
  "updated_at": "2016-07-21T13:12:33.994Z",
  "created_at": "2016-07-21T13:12:33.994Z",
  "str": "From array 18 !",
  "my_id": "577fde18ea79fe632b75c018",
  "obj": {
    "arr_num": [],
    "arr_str": []
  },
  "dat": "2016-07-21T13:12:33.984Z"
}

Notice:
If we try to delete nonexisting doc 'null' value will be returned in 'deletedDoc'!

 */
