/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//common schema which wil be used in both models
var MulticonnSchema = require('./schema/Multiconn');

//default model
var multiconn1Model = mongoose.model('multiconn1MD', MulticonnSchema);


//another connection
require('rootpath')();
var config = require('server/app/config');
var dbConfig = config.env.database.mongodb[1];
var mongooseDriver = require('server/app/middlewares/database/mongooseDriver');



//save doc in two different databases.
//Second database 'db' connection is made dynamically by router request GET /examples/mongoose/60multiconn-dynamic
module.exports.saveDocAsync = function (docNew) {
    'use strict';

    //establish another connection and define another model
    var db = mongooseDriver.konekt(dbConfig);
    var multiconn2Model = db.model('multiconn2MD', MulticonnSchema);


    //Saving doc into default db and also in another db.
    //Collection name is same in both databases and is defined in schema.
    var doc1 = new multiconn1Model(docNew);
    var promis1 = doc1.saveAsync();


    var doc2 = new multiconn2Model(docNew);
    var promis2 = doc2.saveAsync(docNew);


    //if all promises are not fulfilled (bad db connection) error message will be sent to catch()
    return BPromise
        .all([promis1, promis2])
        .timeout(3000, 'TimeOutErr: One or more databases are not connected!');


};


//merge docs from 2 databases ---- {db1: [], db2: []}
module.exports.mergeDocsAsync = function () {
    'use strict';

    //establish another connection and define another model
    var db = mongooseDriver.konekt(dbConfig);
    var multiconn2Model = db.model('multiconn2MD', MulticonnSchema);


    //get results from first database
    var promis1 = multiconn1Model.findOne().sort({updated_at: -1});

    //get results from second database
    var promis2 = multiconn2Model.findOne().sort({updated_at: 1});

    //define merged result object
    var mergedResult = {};
    mergedResult[mongoose.connection.name] = [];
    mergedResult[db.name] = [];

    //if all promises are not fulfilled (bad db connection) error message will be sent to catch()
    return BPromise
        .all([promis1, promis2])
        .timeout(3000, 'TimeOutErr: One or more databases are not connected!')
        .spread(function (db1Val, db2Val) {
            mergedResult[mongoose.connection.name].push(db1Val);
            mergedResult[db.name].push(db2Val);

            //closing connections
            // mongoose.connection.close(); //close 'supermeandev'
            db.close(); //close 'supermeandev2'

            return mergedResult;
        });


};
/*
{
  "supermeandev": [
    {
      "_id": "579a025829e1ae473eea7a74",
      "updated_at": "2016-07-28T13:02:16.136Z",
      "created_at": "2016-07-28T13:02:16.136Z",
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
