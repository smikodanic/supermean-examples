/**
 * Number options: min, max
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schematypesnumber';


var SchematypesNumber = new Schema({
    num_simple: Number,
    num_minmax: {type: Number, min: 10, max: 20} //10 <= x <= 20
}, opts);


module.exports = SchematypesNumber;
