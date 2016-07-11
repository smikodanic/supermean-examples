/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchematypesNumberModel = mongoose.model('SchematypesNumber', require('./schema/SchematypesNumber'));




//bluebird version
module.exports.saveDocAsync = function (docInput) {
    'use strict';

    var doc = new SchematypesNumberModel(docInput);

    //insert doc into mongodb and return Bluebird Promise
    return doc.saveAsync();
};
