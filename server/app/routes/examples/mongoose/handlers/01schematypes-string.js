/**
 * GET /examples/mongoose/01schematypes-string
 *
 * *** String schema example - various string type options
 */

require('rootpath')();
var SchematypesStringModel = require('server/app/models/examples/schematypesString');
var errorsLib = require('server/app/lib/errorsLib');

module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        str_simple: 'Some string - bluebird version',
        str_lower: 'LoWERcased',
        str_upper: 'upperCASED',
        str_trim: '    trimmed    string    ',
        str_match: 'alphanumeric 1234567890 ',
        str_enum: 'dog'
    };

    //insert doc
    SchematypesStringModel.saveDocAsync(docInput)
        .then(data => res.send('Data inserted by use of Bluebird: <pre>' + JSON.stringify(data, null, 2) + '</pre>'))
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MONGO:
{
  "__v": 0,
  "updated_at": "2016-07-08T16:43:36.404Z",
  "created_at": "2016-07-08T16:43:36.404Z",
  "str_simple": "Some string - bluebird version",
  "str_lower": "lowercased",
  "str_upper": "UPPERCASED",
  "str_trim": "trimmed    string",
  "str_match": "alphanumeric 1234567890 ",
  "str_enum": "dog",
  "_id": "577fd8384e8f988326ec7254"
}
 */
