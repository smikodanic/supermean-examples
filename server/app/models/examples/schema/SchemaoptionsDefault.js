/**
 * schema option: default
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schemaoptionsdefault';


//default values
var now = new Date();

var Schemaoptions = new Schema({
    deff_str: {type: String, default: 'my default value'},
    deff_num: {type: Number, default: 153},
    deff_datum: {type: Date, default: now},
    deff_id: {type: Schema.Types.ObjectId, default: '577fde18ea79fe632b75cb67'}

}, opts);


module.exports = Schemaoptions;
