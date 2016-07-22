/**
 * GET /examples/mongoose/16operationsfindidremove'
 *
 * *** remove a doc
 * Removing one doc by _id.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    operations
        .removeIdAsync('5790c591690dd96c13f0e62d')
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
  "_id": "5790c591690dd96c13f0e62d",
  "updated_at": "2016-07-21T12:52:33.206Z",
  "created_at": "2016-07-21T12:52:33.206Z",
  "str": "Some string 23 !!!",
  "num": 33,
  "my_id": "577fde18ea79fe632b75c004",
  "mix": [
    {
      "name": "marko"
    },
    {
      "name": "petar"
    },
    [
      1,
      2,
      3
    ]
  ],
  "__v": 0,
  "obj": {
    "bul": true,
    "arr_num": [
      5,
      8,
      13,
      21
    ],
    "arr_str": [
      "marko",
      "marković",
      "pero",
      "perić"
    ]
  },
  "dat": "1981-01-12T18:25:55.567Z"
}

Notice:
If we try to delete nonexisting doc 'null' value will be returned in 'deletedDoc'!

 */
