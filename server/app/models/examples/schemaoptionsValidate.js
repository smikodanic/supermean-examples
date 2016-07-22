/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchemaoptionsValidateModel = mongoose.model('SchemaoptionsValidate', require('./schema/SchemaoptionsValidate'));


//save doc
module.exports.saveDocAsync = function (docInput) {
    'use strict';
    var doc = new SchemaoptionsValidateModel(docInput);
    return doc.saveAsync();
};


//find doc
module.exports.findByIdAsync = function (mo_id) {
    'use strict';
    // return SchemaoptionsValidateModel.findById(mo_id).execAsync(); //use this
    return SchemaoptionsValidateModel.findByIdAsync(mo_id); //or this
};
