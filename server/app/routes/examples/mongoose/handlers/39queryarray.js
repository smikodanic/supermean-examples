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
* - in(): field value (String, Number, ...) must be in given array
* - elemMatch() is simmilar to in() but elemMatch() must have conditions and in() must have values */
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
* - elemMatch():  field must be array and one of elements must match criteria
* - elemMatch() is simmilar to in() but elemMatch() must have conditions and in() must have values */
module.exports.elemMatch = function (req, res, next) {
    'use strict';

    //#### elemMatch examples ####
    // query
        // .elemMatch('obj.arr_str', {$regex: /MARK/ig})
        // .elemMatch('obj.arr_num', {$gte: 8, $lte: 13});

    // query.where({mix: {$elemMatch: {'name': {$regex: /MARK/ig}}}});

    //same as above
    query.where('mix') //'mix' is array
        .elemMatch({name: {$regex: /MARK/ig}});




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


/*****************************************************************************************
* GET /examples/mongoose/39queryarray-size *
*****************************************************************************************
* - size():  field must be array and must contain given number of elements */
module.exports.size = function (req, res, next) {
    'use strict';

    // query.size('obj.arr_str', 4);
    query.where('obj.arr_str').size(4);


    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
{
  "obj.arr_str": {
    "$size": 0
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
 */



/*****************************************************************************************
* GET /examples/mongoose/39queryarray-slice *
*****************************************************************************************
* - slice():  reduces number of array elements */
module.exports.slice = function (req, res, next) {
    'use strict';

    query.where('num').equals(33)
        // .slice('obj.arr_str', 2); //returns first 2 elements
        // .slice('obj.arr_str', -2); //returns last 2 elements
        .slice('obj.arr_str', [1, 3]); //returns elements from 1,2 and 3

    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
{
  "obj.arr_str": {
    "$size": 4
  },
  "num": 33
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
array from mongodb:
"arr_str" : [
            "marko",
            "marković",
            "pero",
            "perić"
        ]

sliced array with slice('obj.arr_str', [1, 3]):
"arr_str": [
        "marković",
        "pero",
        "perić"
      ]
 */
