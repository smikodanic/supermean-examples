/**
 * GET /examples/mongoose/20operationsupdate'
 *
 * *** updating docs
 * This method updates all documents which satisfy queryObj.
 * Property in existing field is replaced by newDoc.property value.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //query object
    var queryObj = {str: /Some/ig};

    //new doc
    var docNew = {str: 'Updated doc!!!'};
    var docNew2 = {$inc: {num: 5}}; //increment 'num' by 5 e.g. oldValue + 5

    //update options
    var updOpts = {
        safe: true, //pass errors to callback (default is defined in schema options, and can be overwritten here)
        upsert: false, //whether to create the doc if it doesn't match (false)
        multi: true, //whether multiple documents should be updated (false)
        runValidators: true, //validators validate the update operation against the model's schema
        strict: true, //values not defined in schema will not be saved in db (default is defined in schema options, and can be overwritten here)
        overwrite: false //disables update-only mode, allowing you to overwrite the doc (false)
    };



    operations
        .updateDocAsync(queryObj, docNew2, updOpts)
        .then((countObj) => {
            console.log('Updated: \n' + JSON.stringify(countObj, null, 2));
            res.send('Updated: <pre>' + JSON.stringify(countObj, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
countObj:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}



MongoDB old document field:
 "num" : NumberInt(33)

MongoDB new document field:
 "num" : NumberInt(38)

Conclusion: 'num' is incremented by five.

 */
