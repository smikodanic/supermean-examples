/**
 * GET /examples/mongoose/27operationsfindone
 *
 * *** finding one doc
 * This method returns first doc from the list which match queryObj.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //query object
    var queryObj = {str: /From/ig};

    //these fields will be shown in listed docs
    var showFields = 'str num obj.arr_str';

    //update options
    var findOpts = {
        limit: 0, //0 is infinite (all results will be returned)
        skip: 0,
        sort: {updated_at: -1} //-1 descending, 1 ascending
    };



    operations
        .findOneAsync(queryObj, showFields, null) //limit, skip and sort doesn't have sense because only one doc is returned
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
  "_id": "5790f826588be5ca27bae8af",
  "str": "From array 1 !",
  "obj": {
    "arr_str": []
  }
}
 */
