/**
 * GET /examples/mongoose/02schemaoptions-required
 *
 * *** schema option: required
 * Required data must be defined and inserted into mongodb.
 */
require('rootpath')();
var SchemaoptionsRequiredModel = require('server/app/models/examples/schemaoptionsRequired');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        str_required: 'This property must be defined',
        str_empty: 'cant be empty', //'' empty string will cause error
        num_required: 0 //can be zero
    };

    //insert doc
    SchemaoptionsRequiredModel.saveDocAsync(docInput)
        .then(data => res.send('Required data inserted: <pre>' + JSON.stringify(data, null, 2) + '</pre>'))
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MONGO:

 */
