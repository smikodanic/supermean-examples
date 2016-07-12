/**
 * GET /examples/mongoose/02schemaoptions-default
 *
 * *** schema option: default
 */
require('rootpath')();
var SchematypesBufferodel = require('server/app/models/examples/schematypesBuffer');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    var docInput = {};

    //insert doc
    SchematypesBufferodel.saveDocAsync(docInput)
        .then(data => res.send(data.buff))
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MONGO:

 */
