/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var Schadditions = require('./schema/Schadditions');
var schadditions = mongoose.model('schadditionsMD', Schadditions);



//inserting documents before test
module.exports.insertDocsAsync = function (docsArr) {
    'use strict';
    return schadditions.createAsync(docsArr);
};



/////// METHODS examples

/**
 * apply instance method to find younger users then defined by doc
 * @param  {Object} docCompare - doc to be compared
 * @return {Promise}           - bluebird promise is returned
 */
module.exports.findyounger = function (docCompare) {
    'use strict';
    var age = new schadditions(docCompare);
    var query = age.findYounger('schadditionsMD').where({name: /ana/ig});

    // var query = age.model('schemaMethStatVirtMD').find(); //returns all results

    return query;
};





/////// STATICS examples

//apply static method to find younger users
module.exports.findyoungerStat = function (maxAge) {
    'use strict';
    var query = schadditions.findYoungerStat(maxAge);
    return query;
};





/////// QUERY HELPERS examples

//use custom query helper filterByName(namePart) in a chain
module.exports.filterByName = function (namePart) {
    'use strict';
    var query = schadditions.where({age: {$lt: 30}}).filterByName(namePart);
    return query;
};





/////// MIDDLEWARES

//save doc (execute pre save middleware)
module.exports.savePrePostTestAsync = function (docNew) {
    'use strict';
    var doc = new schadditions(docNew);
    return doc.saveAsync();
};
