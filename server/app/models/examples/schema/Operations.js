/**
 * Model for testing basic operations: insert, delete, update & query
 * http://mongoosejs.com/docs/documents.html
 * http://mongoosejs.com/docs/api.html#document-js
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'operations';

//schema definition
var Sch = new Schema({
    str: {type: String, required: true},
    num: Number,
    dat: {type: Date, default: Date.now},
    my_id: {type: Schema.Types.ObjectId, unique: true},
    obj: {
        bul: Boolean,
        arr_str: [String],
        arr_num: [{type: Number}]
    },
    mix: Schema.Types.Mixed
}, opts);


module.exports = Sch;
