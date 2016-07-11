/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchematypesBufferModel = mongoose.model('SchematypesBuffer', require('./schema/SchematypesBuffer'));




//bluebird version
module.exports.saveDocAsync = function (docInput) {
    'use strict';

    var doc = new SchematypesBufferModel(docInput);

    //insert doc into mongodb and return Bluebird Promise
    return doc.saveAsync();
};
