/**
 * There are 2 ways to define indexes:
 * a) property 'index'
 * b) method index()
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'indeks';


//schema definition
var Sch = new Schema({
    // single: {type: String, index: true}, //single index (usage of index property)
    single: {type: String, index: {name: 'indSingle'}}, //same as above
    ttl: Date,
    c1: String,
    c2: String,
    spar: {type: String, sparse: true},
    desc: String,
    my_id: Schema.Types.ObjectId
}, opts);



/* =-=-=-=-= INDEXES (usage of index() method) =-=-=-=-= */
Sch.index({c1: 1, c2: -1}); //compound index c1-ascending, c2-descending order
Sch.path('ttl').index({expires: 60 * 60 * 3}); //TTL index for 3 hours, also can be '7d' or '3.5h'
Sch.path('desc').index({text: true});
// Sch.path('spar').index({sparse: true});






module.exports = Sch;
