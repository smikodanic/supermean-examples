var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

module.exports = function () {
    'use strict';

    return browserify('./client/src/main.js')
        .bundle()
        .pipe(source('clientApp.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./client/dist/js/'))
        .on('error', function (e) {
            console.log(e);
        });

};