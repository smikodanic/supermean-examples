var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function () {
    'use strict';

    return browserify('./client/src/main.js')
        .bundle()
        .pipe(source('clientApp.js'))
        .pipe(gulp.dest('./client/dist/js/'))
        .on('error', function (e) {
            console.log(e);
        });

};