/**
 * GET /examples/mongoose/36querymostused/...
 */

require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()



/*****************************************************************************************
* GET /examples/mongoose/36querymostused-common?qs=From&limit=2&skip=1&sort=-updated_at *
*****************************************************************************************
* - common used queries: where, limit,skip,  sort, count */
module.exports.common = function (req, res, next) {
    'use strict';
    // console.log(JSON.stringify(req.query, null, 2));
    /*
    {
        "qs": "from",
        "limit": "2",
        "skip": "1",
        "sort": "-updated_at"
    }
     */

    var qsReg = new RegExp(req.query.qs, 'ig');

    //define query
    var query = operationsModel.getFindQuery();
    query
        .where({str: qsReg})
        .limit(req.query.limit)
        .skip(req.query.skip)
        .sort(req.query.sort);


        //execute query and count
    query.execAsync()
        //from this point use blubird methods
        .then(function (resultsArr) {
            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');

            //count results
            return query.countAsync()
                .then(resultsNum => console.log('TOTAL: ' + resultsNum));
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:

Results:
[
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
    "_id": "579107d43b22965533dc76b2",
    "updated_at": "2016-07-21T17:35:16.815Z",
    "created_at": "2016-07-21T17:35:16.815Z",
    "str": "From array 2 !",
    "my_id": "577fde18ea79fe632b75c010",
    "__v": 0,
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-21T17:35:16.803Z"
  }
]
TOTAL: 4
 */



/*****************************************************************************************
* GET /examples/mongoose/36querymostused-distinct *
*****************************************************************************************
* - most used queries: distinct */
module.exports.distinct = function (req, res, next) {
    'use strict';

    var query = operationsModel.getFindQuery();
    query.distinct('str');

    query.execAsync()
        //from this point use blubird methods
        .then(function (resultsArr) {
            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
[
  "From array 1 !",
  "From array 17 !",
  "From array 18 !",
  "Some string 23 !!!"
]
 */



/*****************************************************************************************
* GET /examples/mongoose/36querymostused-regex?qs=From *
*****************************************************************************************
* - most used queries: distinct */
module.exports.regex = function (req, res, next) {
    'use strict';

    var qsReg = new RegExp(req.query.qs, 'ig');

    //define query
    var query = operationsModel.getFindQuery();
    query.regex('str', qsReg);


    //execute query and count
    query.execAsync()
        //from this point use blubird methods
        .then(function (resultsArr) {
            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};



/*****************************************************************************************
* GET /examples/mongoose/36querymostused-select?qs=From *
*****************************************************************************************
* - most used queries: select */
module.exports.select = function (req, res, next) {
    'use strict';

    var qsReg = new RegExp(req.query.qs, 'ig');

    //define query
    var query = operationsModel.getFindQuery();
    query.where({'str': qsReg}).select('str dat');


    //execute query and count
    query.execAsync()
        .then(function (resultsArr) {
            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
[
  {
    "_id": "579107d43b22965533dc76b1",
    "str": "From array 1 !",
    "dat": "2016-07-21T17:35:16.780Z"
  },
  {
    "_id": "579107d43b22965533dc76b2",
    "str": "From array 1 !",
    "dat": "2016-07-21T17:35:16.803Z"
  },
  {
    "_id": "579107eaa852e07333ee91fa",
    "str": "From array 17 !",
    "dat": "2016-07-21T17:35:38.575Z"
  },
  {
    "_id": "579107eaa852e07333ee91fb",
    "str": "From array 18 !",
    "dat": "2016-07-21T17:35:38.588Z"
  }
]
 */
