/**
 * Actions on model
 * http://mongoosejs.com/docs/documents.html
 * http://mongoosejs.com/docs/api.html#document-js
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var docModel = mongoose.model('doc', require('./schema/Operations'));



//= - = - = - = INSERT operations

//save() method or Bluebird's saveAsync()
module.exports.saveDocAsync = function (docInput) {
    'use strict';
    var doc = new docModel(docInput);
    return doc.saveAsync();
};

//create() method
module.exports.createDocAsync = function (docInput) {
    'use strict';
    return docModel.createAsync(docInput);
};

//insertMany() method
module.exports.insManyDocAsync = function (docInput) {
    'use strict';
    return docModel.insertManyAsync(docInput);
};



