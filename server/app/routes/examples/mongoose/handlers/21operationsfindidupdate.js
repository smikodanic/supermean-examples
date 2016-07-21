/**
 * GET /examples/mongoose/21operationsfindidupdate'
 *
 * *** update a doc
 * Update one doc found by _id.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //query object
    var id = '5790d5be9c5a539e1db2bf75';

    //new doc
    var docNew = {str: 'Doc updated by findByIdAndUpdate !'};

    //update options
    var updOpts = {
        safe: true, //pass errors to callback (default is defined in schema options, and can be overwritten here)
        upsert: false, //whether to create the doc if it doesn't match (false)
        multi: false, //whether multiple documents should be updated (false)
        runValidators: true, //validators validate the update operation against the model's schema
        strict: true, //values not defined in schema will not be saved in db (default is defined in schema options, and can be overwritten here)
        overwrite: false //disables update-only mode, allowing you to overwrite the doc (false)
    };


    operations
        .updateIdAsync(id, docNew, updOpts)
        .then((docOld) => {
            console.log('Updated: \n' + JSON.stringify(docOld, null, 2));
            res.send('Updated: <pre>' + JSON.stringify(docOld, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser window (shows old doc):
{
  "_id": "5790d5be9c5a539e1db2bf75",
  "updated_at": "2016-07-21T14:08:01.333Z",
  "created_at": "2016-07-21T14:01:34.177Z",
  "str": "Some string 23 !!!", //replaced field
  "num": 38,
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

 */
