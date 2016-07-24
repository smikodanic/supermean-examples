/**
 * GET /examples/mongoose/40queryoper...
 */

require('rootpath')();
var operationsModel = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()


var query = operationsModel.getFindQuery();


/*****************************************************************************************
* GET /examples/mongoose/40queryoper-remove *
*****************************************************************************************
* - remove([criteria], [callback]) removing all docs which matches query criteria. */
module.exports.remove = function (req, res, next) {
    'use strict';

    //first example
    // query
        // .size('obj.arr_str', 0)
        // .remove();

    //second example
    query
        .remove({'obj.arr_str': {$elemMatch: {$eq: 'pero'}}});


    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
{
  "obj.arr_str": {
    "$elemMatch": {
      "$eq": "pero"
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
CONSOLE:
{
  "ok": 1,
  "n": 1
}
 */



/*****************************************************************************************
* GET /examples/mongoose/40queryoper-update *
*****************************************************************************************
* - update(criteria, newDoc, options).exec() update all docs which matches query criteria. */
module.exports.update = function (req, res, next) {
    'use strict';

    query
        .where({'obj.arr_str': {$elemMatch: {$eq: 'pero'}}})
        .update({num: 35});


    console.log(JSON.stringify(query.getQuery(), null, 2));
    /*
{
  "obj.arr_str": {
    "$elemMatch": {
      "$eq": "pero"
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
CONSOLE:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}
 */
