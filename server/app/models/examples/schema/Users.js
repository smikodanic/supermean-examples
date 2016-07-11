/**
 * Users model
 *
 */

/*
 * Define schema as const because later Schema changes will not generate error.
 * For example statement Schema = {} will not make error.
 */
const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.timestamps = null; //override option property


//schema
// var Users = new Schema({
//     my_id: {type: String, unique: true},
//     prod_id: {type: Schema.ObjectId, ref: 'Organization', index: true, required: true},
//     first_name: String,
//     second_name: String,
//     working_place: {type: String, default: 'programmer'},
//     age: Number,
//     provider: {type: String, select: false},
//     hobies: {type: String, enum: ['sport', 'walking', 'reading books'], required: true},
//     created: {type: Date, default: Date.now}
// }, opts);

var Users = new Schema({
    name: String,
    age: Number,
    born: Date
}, opts);


//define index
opts.autoIndex = true; //otherwise indexing will not work
Users.index({name: -1});




module.exports = Users;
