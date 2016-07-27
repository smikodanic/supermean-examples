/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var Validation = require('./schema/Validation');
var validation = mongoose.model('validationMD', Validation);



//save one doc before validation
module.exports.saveDocAsync = function (docNew) {
    'use strict';
    var doc = new validation(docNew);
    return doc.saveAsync();
};
