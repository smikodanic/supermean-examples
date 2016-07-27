/**
 *
 * How to use 'validate' property and method.
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'validation';

//validators
var valid_text = require('./_validators/valid_text');


//schema definition
var Sch = new Schema({
    //===== type validators and builtin validators like enum, min, max
    str: String,
    str_enum: {type: String, enum: ['pas', 'mačka', 'konj', 'ovca']},
    num: Number,
    num_minmax: {type: Number, min: 20, max: 30},
    my_id: Schema.Types.ObjectId,

    //===== PROPERTY validate - schema path validators
    str_reg: {type: String, validate: [/\d/, '{PATH}:{VALUE}---String must contain digits only.']}, //regex validator
    str_inpath: {type: String, validate: [valid_text.hasLengthBetween(3, 10), '{PATH}:{VALUE}---Character length is out of limits.']},

    //===== METHOD
    str_meth: String
}, opts);


/* =-=-=-=-= METHOD validate() - validation by using method path().validate() =-=-=-=-= */
Sch.path('str_meth').validate(valid_text.lettersOnly, '{PATH}:{VALUE}---Input must not contain number.');




module.exports = Sch;
