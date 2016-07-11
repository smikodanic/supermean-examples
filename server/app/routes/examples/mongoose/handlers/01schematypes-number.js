/**
 * GET /examples/mongoose/01schematypes-number
 *
 * *** Number schema example - various number type options
 */
require('rootpath')();
var SchematypesNumberModel = require('server/app/models/examples/schematypesNumber');
var errorsLib = require('server/app/lib/errorsLib');

module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        num_simple3: 333,
        num_minmax: 10 //can be 10,11,12 ..., 20
    };

    //insert doc
    SchematypesNumberModel.saveDocAsync(docInput)
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
  "num_simple": 333,
  "num_minmax": 10,
  "_id": "577fe2a5a634bd262eadc1d6"
}
 */
