/**
 * This schema is refrenced to 'RefsStory' schema.
 *
 * Important !!!
 * ----------------------------------------------------------------------
 * ref: 'refsStoryMD'
 * where refStoryMD is model name from
 * var refsStoryModel = mongoose.model('refsStoryMD', RefsStorySchema);
 * -----------------------------------------------------------------------
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'refs_person';


//schema definition
var RefsPersonSchema = new Schema({
    _id: Number,
    name: String,
    age: Number,
    stories: [{type: Schema.Types.ObjectId, ref: 'refsStoryMD'}] //'type' must be ssame as RefsStory._id, e.g. Schema.Types.ObjectId
}, opts);



/* =-=-=-=-= MIDDLEWARES (pre & post hooks) =-=-=-=-= */
//pre middlewares
var pre_RefsPerson = require('./_middlewares/pre_RefsPerson');
RefsPersonSchema.pre('remove', pre_RefsPerson.delLinkedStories);





module.exports = RefsPersonSchema;
