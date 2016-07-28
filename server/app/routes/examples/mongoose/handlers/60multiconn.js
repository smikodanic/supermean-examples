/**
 * GET /examples/mongoose/60multiconn...
 */

require('rootpath')();
var multiconnModel = require('server/app/models/examples/multiconn');
var errorsLib = require('server/app/lib/errorsLib');

const BPromise = require('bluebird');


/*****************************************************************************************
* GET /examples/mongoose/60multiconn-dynamic *
*****************************************************************************************
* Save doc in two different databases.
  Second database 'db' connection is made dynamically by router request GET /examples/mongoose/60multiconn-dynamic */
module.exports.dynamic = function (req, res, next) {
    'use strict';

    var docNew = {
        str: 'Nesto',
        num: 23
    };


    multiconnModel.saveDocAsync(docNew)
        .spread(function (rez1, rez2) {
            console.log('Inserted into db1: \n' + JSON.stringify(rez1, null, 2));
            console.log('Inserted into db2: \n' + JSON.stringify(rez2, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(rez1, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });



};
/*
CONSOLE:
Inserted into db1:
{
  "__v": 0,
  "updated_at": "2016-07-28T06:35:19.676Z",
  "created_at": "2016-07-28T06:35:19.676Z",
  "str": "Nesto",
  "num": 23,
  "_id": "5799a7a761876ff811de3923"
}
Inserted into db2:
{
  "__v": 0,
  "updated_at": "2016-07-28T06:35:19.683Z",
  "created_at": "2016-07-28T06:35:19.683Z",
  "str": "Nesto",
  "num": 23,
  "_id": "5799a7a761876ff811de3924"
}
 */


/*****************************************************************************************
* GET /examples/mongoose/60multiconn-merge *
*****************************************************************************************
* Merge results from two databases. */
module.exports.merge = function (req, res, next) {
    'use strict';

    multiconnModel.mergeDocsAsync()
        .then(function (mergedRes) {
            console.log('Merged result: \n' + JSON.stringify(mergedRes, null, 2));
            res.send('Merged result: <pre>' + JSON.stringify(mergedRes, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
{
  "supermeandev": [
    {
      "_id": "5799fdc79c75bc983a26a8f2",
      "updated_at": "2016-07-28T12:42:47.875Z",
      "created_at": "2016-07-28T12:42:47.875Z",
      "str": "Nesto",
      "num": 23,
      "__v": 0
    }
  ],
  "supermeandev2": [
    {
      "_id": "5799fdc79c75bc983a26a8f3",
      "updated_at": "2016-07-28T12:42:47.882Z",
      "created_at": "2016-07-28T12:42:47.882Z",
      "str": "Nesto",
      "num": 23,
      "__v": 0
    }
  ]
}
 */
