/**
 * Buffer schema type
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schematypesbuffer';


var SchematypesMisc = new Schema({
    buff: Buffer,

}, opts);


module.exports = SchematypesMisc;
