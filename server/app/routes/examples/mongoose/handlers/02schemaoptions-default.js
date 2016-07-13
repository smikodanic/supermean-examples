/**
 * GET /examples/mongoose/02schemaoptions-default
 *
 * *** schema option: default
 * Default vale is inserted when mongo doc property is not defined, e.g. var docInput = {}
 */
require('rootpath')();
var SchemaoptionsDefaultModel = require('server/app/models/examples/schemaoptionsDefault');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    var docInput = {};

    //insert doc
    SchemaoptionsDefaultModel.saveDocAsync(docInput)
        .then(data => res.send('Default data inserted: <pre>' + JSON.stringify(data, null, 2) + '</pre>'))
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MONGO:

 */
