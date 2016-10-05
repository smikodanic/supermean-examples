/**
 * GET /examples/mongoose/38querylogic...
 */

require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()



/*****************************************************************************************
* GET /examples/mongoose/38querylogic-gt-lt *
*****************************************************************************************
* - example with gt() and lt(). Find results between two numbers. */
module.exports.gtlt = function (req, res, next) {
    'use strict';

    //define query
    var query = operationsModel.getFindQuery();
    query
        .where('num').gt(30).lt(34);


    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
    {
      "num": {
        "$gt": 30,
        "$lt": 34
      }
    }
     */


    query.execAsync()
        .then(function (resultsArr) {
            console.log('find() results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('find() results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:
[
  {
    "_id": "5793685edf93c8ac10886bc7",
    "updated_at": "2016-07-23T12:51:42.266Z",
    "created_at": "2016-07-23T12:51:42.266Z",
    "str": "Some string 23 !!!",
    "num": 33,
    "my_id": "577fde18ea79fe632b75c004",
    "mix": [
      {
        "name": "marko"
      },
      {
        "name": "petar"
      },
      [
        1,
        2,
        3
      ]
    ],
    "__v": 0,
    "obj": {
      "bul": true,
      "arr_num": [
        5,
        8,
        13,
        21
      ],
      "arr_str": [
        "marko",
        "marković",
        "pero",
        "perić"
      ]
    },
    "dat": "1981-01-12T18:25:55.567Z"
  }
]
 */



/*****************************************************************************************
* GET /examples/mongoose/38querylogic-and-or *
*****************************************************************************************
* - example with and() and or() */
module.exports.andor = function (req, res, next) {
    'use strict';

    //define query
    var query = operationsModel.getFindQuery();
    query
        .and([{str: {$regex: /som/ig}}, {num: {$lt: 35}}]);


    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
    {
      "$and": [
        {
          "str": {
            "$regex": {}
          }
        },
        {
          "num": {
            "$lt": 35
          }
        }
      ]
    }
     */


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
CONSOLE:
Results:
[
  {
    "_id": "5793685edf93c8ac10886bc7",
    "updated_at": "2016-07-23T12:51:42.266Z",
    "created_at": "2016-07-23T12:51:42.266Z",
    "str": "Some string 23 !!!",
    "num": 33,
    "my_id": "577fde18ea79fe632b75c004",
    "mix": [
      {
        "name": "marko"
      },
      {
        "name": "petar"
      },
      [
        1,
        2,
        3
      ]
    ],
    "__v": 0,
    "obj": {
      "bul": true,
      "arr_num": [
        5,
        8,
        13,
        21
      ],
      "arr_str": [
        "marko",
        "marković",
        "pero",
        "perić"
      ]
    },
    "dat": "1981-01-12T18:25:55.567Z"
  }
]
 */
