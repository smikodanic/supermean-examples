/**
 * GET /examples/mongoose/29operationscountfind
 *
 * *** count docs
 * Returns number which represent the amount of found documents.
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //query object
    var queryObj = {str: /From/ig};

    //these fields will be shown in listed docs
    var showFields = 'str num my_id updated_at';

    //update options
    var findOpts = {
        limit: 0, //0 is infinite
        skip: 0,
        sort: {updated_at: -1} //-1 descending, 1 ascending
    };



    operations
        .countDocsAsync(queryObj)
        .then(resultsNum => {
            return operations
                    .findDocAsync(queryObj, showFields, findOpts)
                    .then((resultsArr) => {
                        var results = {
                            count: resultsNum,
                            dataArr: resultsArr
                        }
                        return results;
                    });
        })
        .then(results => { //promise returned from operations.findDocAsync()
            console.log('Results: \n' + JSON.stringify(results, null, 2));
            res.send('Results: <b style="color:red">' + results.count + '</b><pre>' + JSON.stringify(results.dataArr, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser:

Results: 4
[
  {
    "_id": "579107eaa852e07333ee91fb",
    "updated_at": "2016-07-21T17:35:38.593Z",
    "str": "From array 18 !",
    "my_id": "577fde18ea79fe632b75c018"
  },
  {
    "_id": "579107eaa852e07333ee91fa",
    "updated_at": "2016-07-21T17:35:38.593Z",
    "str": "From array 17 !",
    "my_id": "577fde18ea79fe632b75c017"
  },
  {
    "_id": "579107d43b22965533dc76b2",
    "updated_at": "2016-07-21T17:35:16.815Z",
    "str": "From array 2 !",
    "my_id": "577fde18ea79fe632b75c010"
  },
  {
    "_id": "579107d43b22965533dc76b1",
    "updated_at": "2016-07-21T17:35:16.808Z",
    "str": "From array 1 !",
    "my_id": "577fde18ea79fe632b75c009"
  }
]
 */
