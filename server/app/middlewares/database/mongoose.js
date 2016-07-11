/**
 * Mongoose middleware for mongoDB
 */

var mongoose = require('mongoose');
var chalk = require('chalk');


module.exports = function (config) {
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
    mongoose.connect(config.env.database.mongodb.uri, options);


    //events
    mongoose.connection.on('error', function (err) {
        console.error(chalk.blue('Mongoose error: ' + err));
    });

    mongoose.connection.on('connected', function () {
        console.info(chalk.blue('Mongoose connection: connected'));
    });

    mongoose.connection.on('open', function () {
        console.info(chalk.blue('Mongoose connection: open'));
    });

    mongoose.connection.on('reconnected', function () {
        console.info(chalk.blue('Mongoose connection: reconnected'));
    });

    mongoose.connection.on('disconnected', function () {
        console.warn(chalk.blue('Mongoose connection: disconnected'));
    });

    process.on('SIGINT', function () {
        mongoose.disconnect(function () {
            console.log(chalk.blue('Mongoose disconnected on app termination by SIGINT'));
            process.exit(0);
        });
    });

};
