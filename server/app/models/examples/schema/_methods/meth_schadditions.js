/**
 * METHODS (instance methods - methods binded to model instances e.g. documents)
 *
 * method functions for SchemaMethStstVirt schema
 *
 * Notice:
 * 'this' replaces current model instance e.g. document
 *  this.model() -> document model
 *  this.age -> document field
 *
 */

module.exports.findYounger = function (modelName) {
    'use strict';

    //notice that  this.model() is model returned from model instance e.g. doc
    var query = this.model(modelName).find({age: {$lt: this.age}});
    return query;
};
