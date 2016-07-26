/**
 * Schema additions: methods, statics, virtuals, query helpers, middlewares(pree & post), plugins
 * http://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
 * http://mongoosejs.com/docs/guide.html
 * http://mongoosejs.com/docs/2.7.x/docs/virtuals.html
 */

const Schema = require('mongoose').Schema;

//schema options
var opts = require('./_options');
opts.collection = 'schadditions';

//schema definition
var Sch = new Schema({
    name: {type: String, required: true},
    age: Number //or 'number'
}, opts);



/* =-=-=-= METGODS (instance methods) [var instance = new Model(); instance.findYounger();] =.=.=.= */
var meth_schadditions = require('./_methods/meth_schadditions');
Sch.methods.findYounger = meth_schadditions.findYounger;


/* =-=-=-=-= STATICS (static methods)  =-=-=-=-= */
var stat_schadditions = require('./_statics/stat_schadditions');
Sch.statics.findYoungerStat = stat_schadditions.findYoungerStat;


/* =-=-=-=-= QUERY HELPERS =-=-=-=-= */
var query_schadditions = require('./_query_helpers/query_schadditions');
Sch.query.filterByName = query_schadditions.filterByName;


/* =-=-=-=-= VIRTUALS =-=-=-=-= */
opts.toObject = {virtuals: true};
opts.toJSON = {virtuals: true};
var virt_schadditions = require('./_virtuals/virt_schadditions');
Sch.virtual('virt_name_age').get(virt_schadditions.virt_name_age);


/* =-=-=-=-= MIDDLEWARES (pre & post hooks) =-=-=-=-= */
//pre middlewares
var pre_schadditions = require('./_middlewares/pre_schadditions');
Sch.pre('save', pre_schadditions.showNewName); //first pre middleware, second will be called by next() in async chain
Sch.pre('save', pre_schadditions.checkAge); //check does 'name' path exists

//post middlewares
var post_schadditions = require('./_middlewares/post_schadditions');
Sch.post('save', post_schadditions.post1);
Sch.post('save', post_schadditions.post2);

//get execution time
Sch.pre('save', pre_schadditions.startTimer);
Sch.post('save', post_schadditions.stopTimer);



/* =-=-=-=-= PLUGINS =-=-=-=-= */
var plug_commonfields = require('./_plugins/plug_commonfields');
Sch.plugin(plug_commonfields.idWithAutoIncrement);


module.exports = Sch;
