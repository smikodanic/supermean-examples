/**
 * Actions on model
 * http://mongoosejs.com/docs/documents.html
 * http://mongoosejs.com/docs/api.html#document-js
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var operationsModel = mongoose.model('operations', require('./schema/Operations'));



//= - = - = - = INSERT operations

//save() method or Bluebird's saveAsync()
module.exports.saveDocAsync = function (docInput) {
    'use strict';
    var operations = new operationsModel(docInput);
    return operations.saveAsync();
};

//create() method
module.exports.createDocAsync = function (docInput) {
    'use strict';
    return operationsModel.createAsync(docInput);
};

//insertMany() method
module.exports.insManyDocAsync = function (docInput) {
    'use strict';
    return operationsModel.insertManyAsync(docInput);
};



//= - = - = - = DELETE operations

//remove() method or Bluebird's removeAsync()
module.exports.removeDocAsync = function (queryObj) {
    'use strict';
    return operationsModel.removeAsync(queryObj);
};

//findByIdAndRemove() or Bluebird's findByIdAndRemoveAsync()
module.exports.removeIdAsync = function (id) {
    'use strict';
    // return operationsModel.findByIdAndRemove(id).execAsync();
    return operationsModel.findByIdAndRemoveAsync(id);
};

//findOneAndRemove() or Bluebird's findOneAndRemoveAsync()
module.exports.removeOneAsync = function (queryObj) {
    'use strict';
    return operationsModel.findOneAndRemoveAsync(queryObj);
};



//= - = - = - = UPDATE operations

//update() method or Bluebird's updateAsync()
module.exports.updateDocAsync = function (queryObj, docNew, updOpts) {
    'use strict';
    return operationsModel.updateAsync(queryObj, docNew, updOpts);
};

//findByIdAndUpdate() or Bluebird's findByIdAndUpdateAsync()
module.exports.updateIdAsync = function (id, docNew, updOpts) {
    'use strict';
    return operationsModel.findByIdAndUpdateAsync(id, docNew, updOpts);
};

//findOneAndUpdate() or Bluebird's findoneAndUpdateAsync()
module.exports.updateOneAsync = function (queryObj, docNew, updOpts) {
    'use strict';
    return operationsModel.findOneAndUpdateAsync(queryObj, docNew, updOpts);
};



//= - = - = - = SEARCH operations

//find() or Bluebird's findAsync()
module.exports.findDocAsync = function (queryObj, fields, findOpts) {
    'use strict';
    return operationsModel.findAsync(queryObj, fields, findOpts);
};

//findById() or Bluebird's findByIdAsync()
module.exports.findIdAsync = function (id, fields, findOpts) {
    'use strict';
    return operationsModel.findByIdAsync(id, fields, findOpts);
};

//findOne() or Bluebird's findOneAsync()
module.exports.findOneAsync = function (id, fields, findOpts) {
    'use strict';
    return operationsModel.findOneAsync(id, fields, findOpts);
};

//count() or Bluebird's countAsync()
module.exports.countDocsAsync = function (queryObj) {
    'use strict';
    return operationsModel.countAsync(queryObj);
};

//distinct() or Bluebird's distinctAsync()
module.exports.distinctDocAsync = function (field, queryObj) {
    'use strict';
    return operationsModel.distinctAsync(field, queryObj);
};



//= - = - = - = SEARCH-QUERY operations

//returns 'query' object
module.exports.getFindQuery = function () {
    return operationsModel.find();
};
