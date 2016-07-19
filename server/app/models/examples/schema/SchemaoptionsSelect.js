/**
 * schema property option: select
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schemaoptionsselect';


var Schemaoptions = new Schema({
    str_selected: {type: String, select: true},
    str_unselected: {type: String, select: false}
}, opts);


module.exports = Schemaoptions;
