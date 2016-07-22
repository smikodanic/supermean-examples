/**
 * GET /examples/mongoose/26operationsfindid
 *
 * *** finding doc by _id
 * This method list a document which has 'id'.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //doc _id
    var id = '5790f816588be5ca27bae8ae';

    //these fields will be shown in listed docs
    var showFields = 'str num obj.arr_str';

    //update options
    var findOpts = {
        limit: 0, //0 is infinite (all results will be returned)
        skip: 0,
        sort: {updated_at: -1} //-1 descending, 1 ascending
    };



    operations
        .findIdAsync(id, showFields, null) //limit, skip and sort doesn't have sense because only one doc is returned
        .then((resultObj) => {
            console.log('Result: \n' + JSON.stringify(resultObj, null, 2));
            res.send('Result: <pre>' + JSON.stringify(resultObj, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser:

resultObj:
{
  "_id": "5790f816588be5ca27bae8ae",
  "str": "Some string 23 !!!",
  "num": 33,
  "obj": {
    "arr_str": [
      "marko",
      "marković",
      "pero",
      "perić"
    ]
  }
}
 */
