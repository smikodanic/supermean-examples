/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model based on default db connection (server/app/middlewares/database/mongoose.js)
var Multiconn = require('./schema/Multiconn');
var multiconnModel = mongoose.model('multiconnMD', Multiconn);


//define model based on second db connection
var db2 = mongoose.createConnection('mongodb://supermean_user:somePass@localhost:27017/supermeandev2');
var multiconnModel2 = db2.model('multiconnMD2', Multiconn);


//save a doc
module.exports.saveDocAsync = function (docNew) {
    'use strict';
    var doc = new multiconnModel(docNew);
    return doc.saveAsync().then(function () {
        var doc2 = new multiconnModel2(docNew);
        return doc2.saveAsync(docNew);
    });

};
