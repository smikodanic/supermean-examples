/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var Indeks = require('./schema/Indeks');
var indeksModel = mongoose.model('indeksMD', Indeks);



//get all indekses
module.exports.listIndeksAsync = function () {
    'use strict';
    // indeksModel.collection.getIndexes(function (err, res) {console.log(res);});
    return indeksModel.collection.getIndexesAsync();
};


//remove all indekses
module.exports.removeIndeksAsync = function () {
    'use strict';
    return indeksModel.collection.dropIndexesAsync();
};


//build indexes according to current schema
module.exports.buildIndeksAsync = function () {
    'use strict';
    return indeksModel.ensureIndexesAsync();
};
