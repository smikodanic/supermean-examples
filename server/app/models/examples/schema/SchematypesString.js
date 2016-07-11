/**
 * String options: lowercase, uppercase, trim, match, enum
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schematypesstring';


var SchematypesString = new Schema({
    str_simple: String,
    str_lower: {type: String, lowercase: true},
    str_upper: {type: String, uppercase: true},
    str_trim: {type: String, trim: true},
    str_match: {type: String, match: /^[a-z0-9 ]+$/i}, //only alphanumeric chars and space
    str_enum: {type: String, enum: ['cat', 'dog', 'cow']} //array of strings
}, opts);


module.exports = SchematypesString;
