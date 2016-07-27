/**
 * This schema will be shared on two different databases.
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'multiconn'; //'multiconn' collection should appear in both databases


//schema definition
var Sch = new Schema({
    str: String,
    num: Number
}, opts);


module.exports = Sch;
