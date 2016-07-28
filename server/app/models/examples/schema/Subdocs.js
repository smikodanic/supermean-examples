/**
 * This schema contains child schemas.
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'subdocs';


//child schema
var childSch = {
    name: {
        type: String,
        // unique: true, //will not work for array 'arr' but will work for object 'obj'
        required: true
    }
};



//schema definition
var Sch = new Schema({
    str: String,
    obj: childSch,
    arr: [childSch]
}, opts);


module.exports = Sch;
