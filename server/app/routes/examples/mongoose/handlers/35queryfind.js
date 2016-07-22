/**
 * GET /examples/mongoose/35queryfind
 *
 * *** finding docs
 * This example shows how to return 'query' object from model and execute it with exec() method inside this router.
 */
require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    //query object
    var queryObj = {str: /From/ig};


    operationsModel
        .findQuery(queryObj)
        .sort({dat: -1}) //additional sorting
        .exec((err, resultsArr) => {
            if (err) {
                err.status = err.status || 500;
                errorsLib.onErrorCatch(err, res);
                return;
            }

            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        });

};


/*
Browser:

resultsArr:
[
  {
    "_id": "579107eaa852e07333ee91fb",
    "updated_at": "2016-07-21T17:35:38.593Z",
    "created_at": "2016-07-21T17:35:38.593Z",
    "str": "From array 18 !",
    "my_id": "577fde18ea79fe632b75c018",
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-21T17:35:38.588Z"
  },
  {
    "_id": "579107eaa852e07333ee91fa",
    "updated_at": "2016-07-21T17:35:38.593Z",
    "created_at": "2016-07-21T17:35:38.592Z",
    "str": "From array 17 !",
    "my_id": "577fde18ea79fe632b75c017",
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-21T17:35:38.575Z"
  },
  {
    "_id": "579107d43b22965533dc76b1",
    "updated_at": "2016-07-21T17:35:16.808Z",
    "created_at": "2016-07-21T17:35:16.808Z",
    "str": "From array 1 !",
    "my_id": "577fde18ea79fe632b75c009",
    "__v": 0,
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-21T17:35:16.780Z"
  }
]
 */
