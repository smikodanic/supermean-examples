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
        .then(data => {
            console.log('Inserted data: \n' + JSON.stringify(data, null, 2));
        })

        //selecting
        .then(() => {
            // var selectBP = SchemaoptionsSelectModel.findoneDocAsync({}); //give results without 'str_unselected'
            var selectBP = SchemaoptionsSelectModel.findoneDocAsync2({}); //give results with 'str_unselected'

            return selectBP
                .then(val => {
                    console.log('selected result \n' + JSON.stringify(val, null, 2));
                    res.send('selected result <pre>' + JSON.stringify(val, null, 2) + '</pre>');
                })
                .catch(err => console.log(err.stack));
        })

        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser window:

(for SchemaoptionsSelectModel.findoneDocAsync({}) )
{
  "_id": "57868a30f6c500a1405421eb",
  "updated_at": "2016-07-13T18:36:32.474Z",
  "created_at": "2016-07-13T18:36:32.474Z",
  "str_selected": "String selected by default.",
  "__v": 0
}

(for SchemaoptionsSelectModel.findoneDocAsync2({}) )
{
  "_id": "57868a30f6c500a1405421eb",
  "str_selected": "String selected by default.",
  "str_unselected": "String unselected from search results by default."
}

 */
