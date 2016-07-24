/**
 * GET /examples/mongoose/41querymisc...
 */

require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()



var query = operationsModel.getFindQuery();


/*****************************************************************************************
* GET /examples/mongoose/41querymisc-dollarwhere *
*****************************************************************************************
* $where()   -JS function or expression passed to mongodb query (must return true or false) */
module.exports.dollarwhere = function (req, res, next) {
    'use strict';

    query.$where(function () { //here cannot be used arrow function because mongodb doesn't accept it
        return this.str === 'From array 2 !'; //this.str is 'operations#str' field in mongoDB
        // return false; //empty array [] will be returned. Usefull to break output under certain conditions
        // throw new Error('My custom error!'); //throws error to catch()
    });


    query.execAsync()
        //from this point use blubird methods
        .tap(function (resultsArr) { //also you can use then() instead of tap()
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
 */



/*****************************************************************************************
* GET /examples/mongoose/41querymisc-comment *
*****************************************************************************************
* Deprecated in the mongo Shell since v3.2 */
module.exports.comment = function (req, res, next) {
    'use strict';

    query
        .where({})
        .comment('Select doc where num=33') //just a comment
        .where({num: 33});


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
* GET /examples/mongoose/41querymisc-cursor *
*****************************************************************************************
* cursor().on('data', fn) - fn is ececuted every time a new doc come from pushed stream.
* It is so called pushed streams, stream is going from mongodb server and must be paused to prevent memory overload.
* In opposite there is pulled stream where we must send request for every new doc.*/
module.exports.cursorStream = function (req, res, next) {
    'use strict';

    var docs = [];
    let i = 1;
    query
        .where({str: /From/ig})
        .cursor()
        .on('data', function (doc) { //this function is executed on each new doc
            docs.push(doc); //filling docs array
            console.log('doc' + i + JSON.stringify(doc, null, 2));
            i++;
        })
        .on('end', function () {
            res.send('Results: <pre>' + JSON.stringify(docs, null, 2) + '</pre>'); //'docs' is array which contains all docs
            console.log('FINISHED !!!');
        });

    console.log(JSON.stringify(query.getQuery(), null, 2));

};
/*
CONSOLE:
doc1{
  "_id": "5794f0d2482a76035c77ffec",
  "updated_at": "2016-07-24T16:46:11.029Z",
  "created_at": "2016-07-24T16:46:11.029Z",
  "str": "From array 1 !",
  "my_id": "577fde18ea79fe632b75c009",
  "__v": 0,
  "obj": {
    "arr_num": [],
    "arr_str": []
  },
  "dat": "2016-07-24T16:46:10.976Z"
}
doc2{
  "_id": "5794f0d3482a76035c77ffed",
  "updated_at": "2016-07-24T16:46:11.060Z",
  "created_at": "2016-07-24T16:46:11.060Z",
  "str": "From array 2 !",
  "my_id": "577fde18ea79fe632b75c010",
  "__v": 0,
  "obj": {
    "arr_num": [],
    "arr_str": []
  },
  "dat": "2016-07-24T16:46:11.000Z"
}
doc3{
  "_id": "5794f0d6482a76035c77ffee",
  "updated_at": "2016-07-24T16:46:14.767Z",
  "created_at": "2016-07-24T16:46:14.767Z",
  "str": "From array 17 !",
  "my_id": "577fde18ea79fe632b75c017",
  "obj": {
    "arr_num": [],
    "arr_str": []
  },
  "dat": "2016-07-24T16:46:14.764Z"
}
doc4{
  "_id": "5794f0d6482a76035c77ffef",
  "updated_at": "2016-07-24T16:46:14.768Z",
  "created_at": "2016-07-24T16:46:14.768Z",
  "str": "From array 18 !",
  "my_id": "577fde18ea79fe632b75c018",
  "obj": {
    "arr_num": [],
    "arr_str": []
  },
  "dat": "2016-07-24T16:46:14.765Z"
}
 */



/*****************************************************************************************
* GET /examples/mongoose/41querymisc-exists *
*****************************************************************************************
* exists() is checking if path exists. It's mongodb $exists condition.*/
module.exports.exists = function (req, res, next) {
    'use strict';

    query
        .exists('mix.name');
        // .exists('mix');
        // .exists('mix.name2'); //returns empty array because name2 doesn't exist


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

    console.log(JSON.stringify(query.getQuery(), null, 2));

};
/*
[
  {
    "_id": "5794e114b22e77c754d1232e",
    "updated_at": "2016-07-24T15:39:00.082Z",
    "created_at": "2016-07-24T15:39:00.082Z",
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
* GET /examples/mongoose/41querymisc-merge *
*****************************************************************************************
* merge() is merging results from 2 queries.*/
module.exports.merge = function (req, res, next) {
    'use strict';

    var query2 = query.where({str: /some/ig}); //will be merged into query results

    query
        .where({str: /2/ig})
        // .where({str: /some/ig}); //will not work on sme path, so use merge() to apply on same path 'str'
        .merge(query2);


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

    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
    {
        "str": {}
    }
     */

};
/*
[
  {
    "_id": "5794e114b22e77c754d1232e",
    "updated_at": "2016-07-24T15:39:00.082Z",
    "created_at": "2016-07-24T15:39:00.082Z",
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
  },
  {
    "_id": "5794f0d3482a76035c77ffed",
    "updated_at": "2016-07-24T16:46:11.060Z",
    "created_at": "2016-07-24T16:46:11.060Z",
    "str": "From array 2 !",
    "my_id": "577fde18ea79fe632b75c010",
    "__v": 0,
    "obj": {
      "arr_num": [],
      "arr_str": []
    },
    "dat": "2016-07-24T16:46:11.000Z"
  }
]
 */


/*****************************************************************************************
* GET /examples/mongoose/41querymisc-setoptions *
*****************************************************************************************
* setOptions({}) sets query options like limit, sort, ....
* See all options at http://mongoosejs.com/docs/api.html#query_Query-setOptions */
module.exports.setOptions = function (req, res, next) {
    'use strict';

    query
        .setOptions({
            limit: 2,
            skip: 1,
            sort: {updated_at: -1}
        })
        .where({str: /from/ig});


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

    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*

     */

};
