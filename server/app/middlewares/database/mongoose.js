/**
 * Mongoose middleware for mongoDB
 */

var mongoose = require('mongoose');
var chalk = require('chalk');


module.exports = function (dbUri) {
    'use strict';

    //options
    var timeout = 30 * 1000; //30 seconds
    var options = {
        server: {
            keepAlive: timeout,
            connectTimeoutMS: timeout
        }
    };


    //establish mongoose connection
    var db = mongoose.createConnection(dbUri, options);
    // var db = mongoose.connect(dbUri, options);

    //create dbShort which will be outputed to console
    var dbShort = db.host + ':' + db.port + '/' + db.name;



    //events mongoose.connection or db
    db.on('error', function (err) {
        console.error(chalk.blue(dbShort, err));
    });

    db.on('connected', function () {
        console.info(chalk.blue(dbShort, '-connected'));
    });

    db.on('open', function () {
        console.info(chalk.blue(dbShort, '-connection open'));
    });

    db.on('reconnected', function () {
        console.info(chalk.blue(dbShort, '-connection reconnected'));
    });

    db.on('disconnected', function () {
        console.warn(chalk.blue(dbShort, '-connection disconnected'));
    });

    process.on('SIGINT', function () {
        mongoose.disconnect(function () {
            console.log(chalk.blue(dbShort, '-disconnected on app termination by SIGINT'));
            process.exit(0);
        });
    });


    //default plugin
    //mongoose.plugin(function (schema. pluginOpts) {
    //  schema.add({datum: Date});
    //});


};
