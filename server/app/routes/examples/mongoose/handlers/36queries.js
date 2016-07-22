require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()



var query = operationsModel.getFindQuery();


//GET /examples/mongoose/36querydolwhere
//dollar-where: $where(function () {})
//
//*** This example also shows how to convert mongoose promise into bluebird promise
module.exports.dolwhere = function (req, res, next) {
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

    //count results
    query.countAsync()
        .then(resultsNum => console.log('TOTAL: ' + resultsNum));

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
