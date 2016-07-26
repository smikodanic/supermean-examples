/**
 * QUERY HELPERS
 * These methods can be used in chainalbe queries: query.where().myCustom().execAsync();
 */


module.exports.filterByName = function (namePart) {
    'use strict';
    var name_reg = new RegExp(namePart, 'ig');
    var query = this.where({name: {$regex: name_reg}});
    return query;
};
