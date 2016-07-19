/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchemaoptionsIndexModel = mongoose.model('SchemaoptionsIndex', require('./schema/SchemaoptionsIndex'));


//save doc (setter)
module.exports.saveDocAsync = function (docInput) {
    'use strict';
    var doc = new SchemaoptionsIndexModel(docInput);
    return doc.saveAsync();
};


//find doc (getter)
module.exports.findByIdAsync = function (mo_id) {
    'use strict';
    // return SchemaoptionsIndexModel.findById(mo_id).execAsync(); //use this
    return SchemaoptionsIndexModel.findByIdAsync(mo_id); //or this
};


//delete all indexes
module.exports.delIndexesAsync = function () {
    'use strict';
    return SchemaoptionsIndexModel
        .collection.dropAllIndexesAsync()
        .then(result => console.log('All indexes removed: ' + result))
        .catch(err => {throw err});
};


//recreate indexes
module.exports.rebuildIndexes = function () {
    console.log('Indexes rebuild!!!');
    SchemaoptionsIndexModel.ensureIndexes();
};


//show all indexes
module.exports.showAllIndexesAsync = function () {
    'use strict';
    return SchemaoptionsIndexModel.collection.getIndexesAsync();
};
