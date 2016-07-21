/**
 * GET /examples/mongoose/25operationsfind'
 *
 * *** finding docs
 * This method list all documents which satisfy queryObj.
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
        .findDocAsync(queryObj, showFields, findOpts)
        .then((resultsArr) => {
            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser:

resultsArr:
[
  {
    "_id": "5790f828588be5ca27bae8b1",
    "updated_at": "2016-07-21T16:28:24.809Z",
    "str": "From array 17 !",
    "my_id": "577fde18ea79fe632b75c017"
  },
  {
    "_id": "5790f828588be5ca27bae8b2",
    "updated_at": "2016-07-21T16:28:24.809Z",
    "str": "From array 18 !",
    "my_id": "577fde18ea79fe632b75c018"
  },
  {
    "_id": "5790f826588be5ca27bae8b0",
    "updated_at": "2016-07-21T16:28:22.426Z",
    "str": "From array 2 !",
    "my_id": "577fde18ea79fe632b75c010"
  },
  {
    "_id": "5790f826588be5ca27bae8af",
    "updated_at": "2016-07-21T16:28:22.422Z",
    "str": "From array 1 !",
    "my_id": "577fde18ea79fe632b75c009"
  }
]
 */
