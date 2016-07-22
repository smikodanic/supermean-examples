/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchemaoptionsSelectModel = mongoose.model('SchemaoptionsSelect', require('./schema/SchemaoptionsSelect'));



module.exports.saveDocAsync = function (docInput) {
    'use strict';
    var doc = new SchemaoptionsSelectModel(docInput);
    return doc.saveAsync();
};

//give results without 'str_unselected'
module.exports.findoneDocAsync = function (moQuery) {
    'use strict';
    return SchemaoptionsSelectModel.findOne(moQuery).execAsync(); //use this
    // return SchemaoptionsSelectModel.findOneAsync(moQuery); //or this
};

//give results with 'str_unselected'
module.exports.findoneDocAsync2 = function (moQuery) {
    'use strict';
    return SchemaoptionsSelectModel.findOne(moQuery).select('str_unselected').execAsync();
};
