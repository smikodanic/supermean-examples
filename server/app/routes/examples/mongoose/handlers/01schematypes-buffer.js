/**
 * GET /examples/mongoose/01schematypes-buffer
 *
 * *** Buffer schema type
 */
require('rootpath')();
var SchematypesBufferodel = require('server/app/models/examples/schematypesBuffer');
var errorsLib = require('server/app/lib/errorsLib');





module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        buff:
    };

    //insert doc
    SchematypesBufferodel.saveDocAsync(docInput)
        .then(data => res.send('Data inserted by use of Bluebird: <pre>' + JSON.stringify(data, null, 2) + '</pre>'))
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MONGO:

 */
