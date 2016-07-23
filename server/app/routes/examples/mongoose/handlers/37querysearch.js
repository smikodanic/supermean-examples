/**
 * GET /examples/mongoose/37querysearch/...
 */

require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()



var query = operationsModel.getFindQuery();


/*****************************************************************************************
* GET /examples/mongoose/37querysearch-find?qs=from%20array *
*****************************************************************************************
* - example with query.findOne() and query.find() */
module.exports.find = function (req, res, next) {
    'use strict';
    // console.log(JSON.stringify(req.query, null, 2));
    /*
    {
        "qs": "from array"
    }
     */

    var qsReg = new RegExp(req.query.qs, 'ig');

    //define query
    query.find({str: qsReg});

    //execute query and findOne after that
    query.execAsync()
        .then(function (resultsArr) {
            console.log('find() results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('find() results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .then(() => {//count results
            return query
                .countAsync()
                .then(resultsNum => console.log('TOTALfind: ' + resultsNum));
        })
        .then(() => {//find one
            return query
                .findOneAsync()
                .then(resultObj => console.log('findOne() result: ' + resultObj));

        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:
find() results:
[
  {
    "_id": "57936863df93c8ac10886bc8",
    "updated_at": "2016-07-23T12:51:47.406Z",
    "created_at": "2016-07-23T12:51:47.406Z",
    "str": "From array 1 !",
    "my_id": "577fde18ea79fe632b75c009",
    "__v": 0,
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-23T12:51:47.394Z"
  },
  {
    "_id": "57936863df93c8ac10886bc9",
    "updated_at": "2016-07-23T12:51:47.417Z",
    "created_at": "2016-07-23T12:51:47.417Z",
    "str": "From array 2 !",
    "my_id": "577fde18ea79fe632b75c010",
    "__v": 0,
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-23T12:51:47.397Z"
  },
  {
    "_id": "57936866df93c8ac10886bca",
    "updated_at": "2016-07-23T12:51:50.639Z",
    "created_at": "2016-07-23T12:51:50.639Z",
    "str": "From array 17 !",
    "my_id": "577fde18ea79fe632b75c017",
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-23T12:51:50.629Z"
  },
  {
    "_id": "57936866df93c8ac10886bcb",
    "updated_at": "2016-07-23T12:51:50.640Z",
    "created_at": "2016-07-23T12:51:50.640Z",
    "str": "From array 18 !",
    "my_id": "577fde18ea79fe632b75c018",
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-23T12:51:50.636Z"
  }
]

findOne() result:
{
  _id: 57936863df93c8ac10886bc8,
  updated_at: Sat Jul 23 2016 14:51:47 GMT+0200 (CEST),
  created_at: Sat Jul 23 2016 14:51:47 GMT+0200 (CEST),
  str: 'From array 1 !',
  my_id: 577fde18ea79fe632b75c009,
  __v: 0,
  obj: { arr_num: [], arr_str: [] },
  dat: Sat Jul 23 2016 14:51:47 GMT+0200 (CEST)
}

 */

