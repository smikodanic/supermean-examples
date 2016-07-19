/**
 * schema property option: index
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 * Create collection indexes and store them in /var/lib/mongodb*.ns files.
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schemaoptionsindex';


//schema definition
var Schemaoptions = new Schema({
    str_indx: {type: String, index: {name: 'mojBaseInd'}},
    // str_indx: {type: String, index: true}, //simpler

    str_uniq: {type: String, index: {unique: true, name: 'mojUniq'}},
    // str_uniq: {type: String, unique: true} //simpler

    str_spars: {type: String, index: {sparse: true, name: 'mojSpars'}}
    // str_spars: {type: String, sparse: true}

}, opts);




module.exports = Schemaoptions;
