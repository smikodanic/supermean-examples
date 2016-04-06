var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function () {
    'use strict';

    gulp.task('nodemon-start', function () {
        return nodemon({
            script: 'server',
            ignore: [
                'README.md',
                'node_modules/**',
                'bower_components/**',
                'client/**',
                'gulp/**',
                '.*/**'
            ],
            watchedExtensions: ['js', 'json'],
            watchedFolders: ['server'],
            debug: true,
            delayTime: 1,
            env: {
                NODE_ENV: process.env.NODE_ENV || 'dev'
            }
        }).on('restart', ['']);
    });

};