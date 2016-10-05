/**
 * This schema is refrenced to 'RefsPerson' schema.
 *
 * Important !!!
 * ----------------------------------------------------------------------
 * ref: 'refsPersonMD'
 * where refPersonMD is model name from
 * var refsPersonModel = mongoose.model('refsPersonMD', RefsPersonSchema);
 * -----------------------------------------------------------------------
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'refs_story';


//schema definition
var RefsStorySchema = new Schema({
    _creator: {type: Number, ref: 'refsPersonMD'}, //'type' must be same as RefsPerson._id, e.g. Number
    title: String,
    chapter: Number,
    fans: [{type: Number, ref: 'refsPersonMD'}] //'type' must be same as RefsPerson._id, e.g. Number
}, opts);


module.exports = RefsStorySchema;
