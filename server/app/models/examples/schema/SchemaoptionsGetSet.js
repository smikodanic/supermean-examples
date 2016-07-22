/**
 * schema property options: get & set
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 * get: modifying value which comes from mongodb
 * set: modifying value which will go into mongodb
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schemaoptionsgetset';
opts.toJSON = {getters: true}; //enable getters, without this {type: String, get: addStrGetter} addStrGetter will not work

//setter
var uppercaseSetter = function (toDB) {
    'use strict';
    var res = toDB.toUpperCase();
    return res;
};

//getter
var addStrGetter = function (fromDB) {
    'use strict';
    var res = fromDB + ' with added value from addStrGetter';
    return res;
};


//schema definition
var Schemaoptions = new Schema({
    str_set: {type: String, set: uppercaseSetter}, //this string will be modified before db insertion
    str_get: {type: String, get: addStrGetter} //this string will be modified before JSON output to client (e.g. before it is shown in browser window)
}, opts);


//use this instead of opts.toJSON = {getters: true};
// Schemaoptions.set('toJSON', { getters: true });

module.exports = Schemaoptions;
