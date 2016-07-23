/**
 * GET /examples/mongoose/39queryarray...
 */

require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()


var query = operationsModel.getFindQuery();


/*****************************************************************************************
* GET /examples/mongoose/39queryarray-all *
*****************************************************************************************
* - all() return doc with all array elements. */
module.exports.all = function (req, res, next) {
    'use strict';

    //define query
    query
        .all('obj.arr_num', [5, 8, 13, 21]);


    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
{
  "obj.arr_num": {
    "$all": [
      5,
      8,
      13,
      21
    ]
  }
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
* GET /examples/mongoose/39queryarray-in *
*****************************************************************************************
* - in(): field value (String, Number, ...) must be in given array  */
module.exports.in = function (req, res, next) {
    'use strict';

    //define query
    query
        .in('num', [5, 13, 22, 33]);


    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
{
  "num": {
    "$in": [
      5,
      13,
      22,
      33 //'num' contains 33 and thus will return doc
    ]
  }
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



/*****************************************************************************************
* GET /examples/mongoose/39queryarray-elemmatch *
*****************************************************************************************
* - elemMatch():   */
module.exports.elemMatch = function (req, res, next) {
    'use strict';

    //#### elemMatch examples ####
    // query
        // .elemMatch('obj.arr_str', {$regex: /MARK/ig})
        // .elemMatch('obj.arr_num', {$gte: 8, $lte: 13});

    // query.where({mix: {$elemMatch: {'name': {$regex: /MARK/ig}}}});

    //same as above
    query.where('mix') //'mix' is array
        .elemMatch({'name': {$regex: /MARK/ig}});




    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
{
  "mix": {
    "$elemMatch": {
      "name": {
        "$regex": {}
      }
    }
  }
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
