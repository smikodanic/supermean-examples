/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchemaoptionsGetSetModel = mongoose.model('SchemaoptionsGetSet', require('./schema/SchemaoptionsGetSet'));


//save doc (setter)
module.exports.saveDocAsync = function (docInput) {
    'use strict';
    var doc = new SchemaoptionsGetSetModel(docInput);
    return doc.saveAsync();
};

//find doc (getter)
module.exports.findByIdAsync = function (mo_id) {
    'use strict';
    // return SchemaoptionsGetSetModel.findById(mo_id).execAsync(); //use this
    return SchemaoptionsGetSetModel.findByIdAsync(mo_id); //or this
};
