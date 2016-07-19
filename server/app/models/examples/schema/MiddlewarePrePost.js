/**
 * pre & post middleware
 * http://mongoosejs.com/docs/2.7.x/docs/middleware.html
 *
 */

const Schema = require('mongoose').Schema;


//options
var opts = require('./_options');
opts.collection = 'middlewareprepost';

//schema definition
var Sch = new Schema({
    str: {type: String},
    num: {type: Number}
}, opts);




//pre middlewares
var middlewaresPrePostMD = require('./_middlewares/middlewarePrePostMD');
Sch.pre('save', middlewaresPrePostMD.clPre); //first pre middleware
Sch.pre('save', middlewaresPrePostMD.clPreMsg('Next MD executed before save.')); //second middleware
// Sch.pre('save', middlewaresPrePostMD.sendErr); //intentional err


//post middlewares
Sch.post('save', middlewaresPrePostMD.clPost);
Sch.post('save', middlewaresPrePostMD.clPost2);


//get execution time
Sch.pre('save', middlewaresPrePostMD.getStartTime);
Sch.post('save', middlewaresPrePostMD.getExecTime);


module.exports = Sch;
