/**
 * schema property option: required
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schemaoptionsrequired';


var Schemaoptions = new Schema({
    str_required: {type: String, required: true},
    str_empty: {type: String, required: true},
    num_required: {type: Number, required: true}
}, opts);


module.exports = Schemaoptions;
