/**
 * GET /examples/mongoose/02schemaoptions-index
 *
 * *** schema property option: index, unique & sparse
 * ** unique - cannot insert duplicated values
 * ** sparse - indexed only docs which has 'str_spars' field, even this field is null
 *
 * NOTICE: This example works only first time. Next time you reload browser an error will appear because 'str_uniq'
 * is unique field and can not be inserted same value twice.
 *
 * This error will be shown:
 * "11000 E11000 duplicate key error index: supermeandev.schemaoptionsindex.$str_uniq_1"
 *
 * To get inexes in mongo console use:
 * > db.schemaoptionsindex.getIndexes()
 *
 * To rebuild indexes defined in mongoose schema:
 * a) set autoIndex: true
 * b) >db.schemaoptionsindex.dropIndexes()
 * c) restart nodejs app
 */
require('rootpath')();
var schemaoptionsIndex = require('server/app/models/examples/schemaoptionsIndex');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        str_indx: 'Some string which will be indexed.',
        str_uniq: 'Some string which will be indexed uniquely.'
        // str_spars: 'Some string which will be sparse indexed.'
    };


    schemaoptionsIndex
        .saveDocAsync(docInput)
        .then((data) => {
            console.log('Inserted into mongoDB: \n' + JSON.stringify(data, null, 2));

            return schemaoptionsIndex
                .showAllIndexesAsync()
                .then(indexes => res.send('Collection indexes: <pre>' + JSON.stringify(indexes, null, 2) + '</pre>'))
                .catch(err => {
                    throw err; //sent to end catch();
                });

        })
        // .then(schemaoptionsIndex.delIndexesAsync) //remove all indexes (if this is not used an old indexes will stay in collection)
        // .then(schemaoptionsIndex.rebuildIndexes)
        .catch(err => {
            //thrown errors are sent here
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser window:
{
  "_id_": [
    [
      "_id",
      1
    ]
  ],
  "peroInd": [
    [
      "str_indx",
      1
    ]
  ],
  "mojInd": [
    [
      "str_uniq",
      1
    ]
  ]
}

Notice that on simpler definition
var Schemaoptions = new Schema({
    str_indx: {type: String, index: true},
    str_uniq: {type: String, unique: true}
}, opts);
browser output will be:
{
  "_id_": [
    [
      "_id",
      1
    ]
  ],
  "str_indx_1": [
    [
      "str_indx",
      1
    ]
  ],
  "str_uniq_1": [
    [
      "str_uniq",
      1
    ]
  ]
}



Also when try to insert same unique field the error in browser will be:
insertDocument :: caused by :: 11000 E11000 duplicate key error index: supermeandev.schemaoptionsindex.$str_uniq_1 dup key: { : "Some string which will be indexed uniquely." }



Inserted into mongoDB:
{
  "__v": 0,
  "updated_at": "2016-07-15T16:17:33.864Z",
  "created_at": "2016-07-15T16:17:33.864Z",
  "str_indx": "Some string which will be indexed.",
  "str_uniq": "Some string which will be indexed uniquely.",
  "_id": "57890c9ddfa503e33ab1c38c"
}

 */
