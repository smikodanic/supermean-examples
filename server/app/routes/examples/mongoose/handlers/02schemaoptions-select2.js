/**
 * GET /examples/mongoose/02schemaoptions-select
 *
 * *** schema option: select
 * Specify if the path should be included or excluded from query results by default.
 */
require('rootpath')();
var SchemaoptionsSelectModel = require('server/app/models/examples/schemaoptionsSelect');
var errorsLib = require('server/app/lib/errorsLib');
var BPromise = require('bluebird');


module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        str_selected: 'String selected by default.',
        str_unselected: 'String unselected from search results by default.'
    };

    //insert doc
    SchemaoptionsSelectModel

        //inserting
        .saveDocAsync(docInput)
        .then((data) => {
            console.log('Inserted data: \n' + JSON.stringify(data, null, 2));
        })

        //selecting
        .then(() => {
            var select1BP = SchemaoptionsSelectModel.findoneDocAsync({});
            var select2BP = SchemaoptionsSelectModel.findoneDocAsync2({});

            return BPromise.join(select1BP, select2BP,
                (val1, val2) => {
                    console.log('val1 /n' + JSON.stringify(val1, null, 2));
                    console.log('val2 /n' + JSON.stringify(val2, null, 2));
                    res.send('View results in console!');
                })
                .catch(err => console.log(err.stack));
        })

        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MONGO:

 */
