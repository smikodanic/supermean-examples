/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var middlewarePrePostModel = mongoose.model('middlewarePrePost', require('./schema/MiddlewarePrePost'));


//save doc
module.exports.saveDocAsync = function (docInput) {
    'use strict';
    var doc = new middlewarePrePostModel(docInput);
    return doc.saveAsync();
};


//find doc
module.exports.findByIdAsync = function (mo_id) {
    'use strict';
    // return middlewarePrePostModel.findById(mo_id).execAsync(); //use this
    return middlewarePrePostModel.findByIdAsync(mo_id); //or this
};
