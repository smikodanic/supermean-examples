/**
 * STATICS (static methods - binded to model constructor)
 */


//will be used in models as: modelName.findYoungerStat()
module.exports.findYoungerStat = function (maxAge) {
    'use strict';

    var query = this.find({age: {$lt: maxAge}});
    return query;
};
