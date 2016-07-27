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



//save a doc
module.exports.saveDocAsync = function (docNew) {
    'use strict';

    //establish another connection and define another model
    var db = mongooseDriver.konekt(dbConfig);
    var multiconn2Model = db.model('multiconn2MD', MulticonnSchema);

    //Saving doc into default db and after that in another db.
    //Collection name is same in both databases and is defined in schema.
    var doc = new multiconn1Model(docNew);
    return doc.saveAsync().then(function () {
        var doc2 = new multiconn2Model(docNew);
        return doc2.saveAsync(docNew);
    });

};
