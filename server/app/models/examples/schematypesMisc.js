/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchematypesMiscModel = mongoose.model('SchematypesMisc', require('./schema/SchematypesMisc'));




//bluebird version
module.exports.saveDocAsync = function (docInput) {
    'use strict';

    var doc = new SchematypesMiscModel(docInput);

    //insert doc into mongodb and return Bluebird Promise
    return doc.saveAsync();
};
