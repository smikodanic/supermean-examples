/**
 * Schema for testing misc mongoose methods: toJSON, toObject, toString ...
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'misc';

//schema definition
var Sch = new Schema({
    str: {type: String, required: true},
    num: Number,
    fja: Schema.Types.Mixed
}, opts);


module.exports = Sch;
