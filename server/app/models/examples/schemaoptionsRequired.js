/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchemaoptionsRequiredModel = mongoose.model('SchemaoptionsRequired', require('./schema/SchemaoptionsRequired'));




//bluebird version
module.exports.saveDocAsync = function (docInput) {
    'use strict';

    var doc = new SchemaoptionsRequiredModel(docInput);

    //insert doc into mongodb and return Bluebird Promise
    return doc.saveAsync();
};
