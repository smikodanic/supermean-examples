/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchemaoptionsDefaultModel = mongoose.model('SchemaoptionsDefault', require('./schema/SchemaoptionsDefault'));




//bluebird version
module.exports.saveDocAsync = function (docInput) {
    'use strict';

    var doc = new SchemaoptionsDefaultModel(docInput);

    //insert doc into mongodb and return Bluebird Promise
    return doc.saveAsync();
};
