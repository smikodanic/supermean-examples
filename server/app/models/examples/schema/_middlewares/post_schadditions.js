/**
 * middleware post methods
 *
 * Notice:
 * 1. next() is required inside pre middlewares, otherwise 'save' will not work .
 * 2. next() is not used in post middleware. (TypeError: next is not a function)
 */

var chalk = require('chalk');


//post middlewares
module.exports.post1 = function (next) {
    'use strict';
    var newName = this.name; //this replaces model's instance e.g. document
    console.log(chalk.bold.yellow('=== 1st post middleware ===  New inserted name is: ' + newName));
    // next(); //will generate error
};
module.exports.post2 = function (next) {
    'use strict';
    console.log(chalk.bold.yellow('=== 2nd post middleware ==='));
    // next(); //will generate error
};


module.exports.stopTimer = function (next) {
    'use strict';
    var execTime = Date.now() - this.startTime; //this.startTime is defined in pre_schadditions.js
    console.log(chalk.green('Query took ' + execTime + 'ms! - Started at: ' + this.startTime));
};
