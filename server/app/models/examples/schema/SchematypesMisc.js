/**
 * Misc schema types without specific options like String and Number:
 * Date
 * Boolean
 * Array
 * Mixed
 * ObjectId
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schematypesmisc';


var SchematypesMisc = new Schema({
    dat: Date,
    bul: Boolean,
    my_arr: [Number],
    mix: Schema.Types.Mixed,
    mix_arr: [Schema.Types.Mixed], //numbers, strings, objects, etc
    my_id: Schema.Types.ObjectId

}, opts);


module.exports = SchematypesMisc;
