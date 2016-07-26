/**
 * GET /examples/mongoose/07schadditions...
 */

require('rootpath')();
var schadditions = require('server/app/models/examples/schadditions');
var errorsLib = require('server/app/lib/errorsLib');



/*****************************************************************************************
* GET /examples/mongoose/07schadditions-insertdocs *
*****************************************************************************************
* Inital insertion of documents so next examples can be performed. */
module.exports.insertdocs = function (req, res, next) {
    'use strict';

    var docsArr = [
        {name: 'Pero', age: 33},
        {name: 'Ivo', age: 23},
        {name: 'Ana', age: 89},
        {name: 'Marko', age: 84},
        {name: 'Janko', age: 52},
        {name: 'Mara', age: 18},
        {name: 'Lana', age: 9},
        {name: 'Daniel', age: 35},
        {name: 'Jozo', age: 51},
        {name: 'Stevo', age: 43},
        {name: 'Jakov', age: 34}

    ];


    schadditions.insertDocsAsync(docsArr)
        .then(function (resultsArr) {
            console.log('Inserted: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};



/*****************************************************************************************
* GET /examples/mongoose/07schadditions-methods-findyounger *
*****************************************************************************************
* Usage of instance methods. Returns younger then 13. */
module.exports.methods_findyounger = function (req, res, next) {
    'use strict';

    //doc which will be mathed against database docs
    var docCompare = {age: 13};
    // var docCompare = {name: 'Jovica', age: 13}; //also you can use this

    //query with bluebird promisification
    var query = schadditions.findyounger(docCompare);

    query.execAsync() //get resultsArr and continue as bluebird promise
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
  "age": {
    "$lt": 13
  },
  "name": {}
}
     */

};
/*
CONSOLE:
[
  {
    "_id": "5795dbbc023eb600175dcd53",
    "updated_at": "2016-07-25T09:28:28.142Z",
    "created_at": "2016-07-25T09:28:28.142Z",
    "name": "Lana",
    "age": 9,
    "__v": 0
  }
]
 */



/*****************************************************************************************
* GET /examples/mongoose/07schadditions-statics-findyounger?age=13 *
*****************************************************************************************
* Usage of static methods. Returns younger then 13. */
module.exports.statics_findyounger = function (req, res, next) {
    'use strict';

    var maxAge = req.query.age;
    var query = schadditions.findyoungerStat(maxAge);

    query.execAsync() //get resultsArr and continue as bluebird promise
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
  "age": {
    "$lt": 13
  }
}
     */

};
/*
CONSOLE:
[
  {
    "_id": "5795dbbc023eb600175dcd53",
    "updated_at": "2016-07-25T09:28:28.142Z",
    "created_at": "2016-07-25T09:28:28.142Z",
    "name": "Lana",
    "age": 9,
    "__v": 0
  }
]
 */




/*****************************************************************************************
* GET /examples/mongoose/07schadditions-query-findbyname?namePart=an *
*****************************************************************************************
* Usage of query helper: var query = schadditions.where({age: {$lt: 30}}).filterByName(namePart); */
module.exports.query_filterbyname = function (req, res, next) {
    'use strict';

    var namePart = req.query.namePart;
    var query = schadditions.filterByName(namePart);

    query.execAsync() //get resultsArr and continue as bluebird promise
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
/*
CONSOLE:
[
  {
    "_id": "5795dbbc023eb600175dcd53",
    "updated_at": "2016-07-25T09:28:28.142Z",
    "created_at": "2016-07-25T09:28:28.142Z",
    "name": "Lana",
    "age": 9,
    "__v": 0
  }
]
 */



/*****************************************************************************************
* GET /examples/mongoose/07schadditions-pre-save *
*****************************************************************************************
*  */
module.exports.prepost_save = function (req, res, next) {
    'use strict';

    var docNew = {
        name: 'Pre & Post Save Middleware test',
        age: 1
        // age: 0 //will not be saved because of pre middleware validator
    };

    schadditions.savePrePostTestAsync(docNew)
        .then(function (insDoc) {
            console.log('Inserted: \n' + JSON.stringify(insDoc, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(insDoc, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });


};
/*
CONSOLE:

 */

