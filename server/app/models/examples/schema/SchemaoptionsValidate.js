/**
 * schema field option: validate
 * http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 *
 * How to use 'validate' field option.
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'schemaoptionsvalidate';

//validators
var stringVD = require('../../_validators/stringVD');


//schema definition
var Schemaoptions = new Schema({
    str_valid1: {type: String, validate: [stringVD.fromStrLength, 'Character length is less then allowed.']}, //chars must be gretaer then 5
    str_valid2: {type: String, validate: [stringVD.toStrLength(10), 'Character length is greater then allowed.']}, //chars must be less then 10
    str_reg: {type: String, validate: [/\d/, 'A number required']} //regex validator
}, opts);




module.exports = Schemaoptions;
