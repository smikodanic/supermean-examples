/**
 * middleware functions
 *
 * Notice:
 * 1. next() is required inside pre middlewares, otherwise 'save' will not work .
 * 2. next() is not used in post middleware. (TypeError: next is not a function)
 */

var chalk = require('chalk');

module.exports.clPre = function (next) {
    'use strict';
    console.log('=== Pre1 save middleware executed.');

    var err = null; //error will not be displayed
    next(err); //without this next middleware will not work, and also 'save'
};

//middleware with passed veriable 'msg'
module.exports.clPreMsg = function (msg) {
    'use strict';

    var msg2 = '===' + msg;

    return function (next) {
        console.log(msg2);
        next(); //without this 'save' will not work
    };
};

//middleware which will pass error object
module.exports.sendErr = function (next) {
    'use strict';

    var err = new Error('My intentional error!!!');
    next(err);
};


//post middlewares
module.exports.clPost = function (next) {
    'use strict';
    console.log('=== Post1 save middleware executed.');
    // next(); //will generate error
};
module.exports.clPost2 = function (next) {
    'use strict';
    console.log('=== Post2.');
    // next(); //will generate error
};


//**get execution time
module.exports.getStartTime = function (next) {
    'use strict';
    this.startTime = Date.now();
    next();
};
module.exports.getExecTime = function (next) {
    'use strict';
    var execTime = Date.now() - this.startTime;
    console.log(chalk.green('Query took ' + execTime + 'ms! - Started at: ' + this.startTime));
};
