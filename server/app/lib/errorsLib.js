/**
 * Error libraray
 */
const chalk = require('chalk');

//showing errors when error is catched
module.exports.onErrorCatch = function (err, res) {
    'use strict';

    //console
    console.log(chalk.red('catchERR: ' + err.message));

    //browser window
    res.status(err.status || 500);
    res.render('_errors/error', {
        message: err.message,
        error: err
    });
};
