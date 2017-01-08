/**
 * GET /examples/mongoose/22operationsfindoneupdate'
 *
 * *** update one doc
 * Updatinging first document found by queryobj.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //query object
    var queryObj = {str: /From/ig};

    //new doc
    var docNew = {str: 'Doc updated by findOneAndUpdate !'};

    //update options
    var updOpts = {
        safe: true, //pass errors to callback (default is defined in schema options, and can be overwritten here)
        upsert: false, //whether to create the doc if it doesn't match with queryObj (false)
        multi: false, //whether multiple documents should be updated (false)
        runValidators: true, //validators validate the update operation against the model's schema
        strict: true, //values not defined in schema will not be saved in db (default is defined in schema options, and can be overwritten here)
        overwrite: false //disables update-only mode, allowing you to overwrite the doc (false) [if overwrite:true then fields not defined in docNew will be deleted]
    };


    operations
        .updateOneAsync(queryObj, docNew, updOpts)
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
Browser window:

docOld:
{
  "_id": "5790d5c29c5a539e1db2bf77",
  "updated_at": "2016-07-21T14:06:46.676Z",
  "created_at": "2016-07-21T14:01:38.831Z",
  "str": "From array 2 !", //replaced field
  "my_id": "577fde18ea79fe632b75c010",
  "__v": 0,
  "num": 15,
  "num2": 5,
  "obj": {
    "arr_num": [],
    "arr_str": []
  },
  "dat": "2016-07-21T14:01:38.822Z"
}

 */
