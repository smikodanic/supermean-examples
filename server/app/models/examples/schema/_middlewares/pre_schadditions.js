/**
 * middleware pre methods
 *
 * Notice:
 * 1. next() is required inside pre middlewares, otherwise 'save' will not work .
 * 2. next() is not used in post middleware. (TypeError: next is not a function)
 */

var chalk = require('chalk');

module.exports.showNewName = function (next) {
    'use strict';
    var newName = this.name; //this replaces model's instance e.g. document
    console.log(chalk.bold.yellow('=== 1st pre middleware ===  New inserted name will be: ' + newName));

    var err = null; //error will not be displayed
    next(err); //without next() next middleware will not work, and also 'save' will not work
};

module.exports.checkAge = function (next) {
    'use strict';
    var err;
    if (this.age) {
        err = null;
        console.log(chalk.bold.yellow('=== 2nd pre middleware === /age path is OK!'));
    } else {
        err = new Error('Path "/age" must be defined and must have non-zero value!');
    }

    /* ** if err exists saving will not be executed ** */
    next(err); //without this 'save' will not work
};



//**get execution time
module.exports.startTimer = function (next) {
    'use strict';
    this.startTime = Date.now(); //this is model instance e.g. doc
    next();
};
