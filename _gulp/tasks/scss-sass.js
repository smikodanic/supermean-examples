/**
 * SCSS compiler
 * Compiles SCSS files into CSS.
 * Creating .map files.
 * Creating .min files.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer'); //add vendor prefixes: -webkit-, -moz-, -o-,
var sourcemaps = require('gulp-sourcemaps'); //create .map files for scss debugging in browser
var cssmin = require('gulp-cssmin'); //create .min files
var rename = require('gulp-rename');

//header - banner
var header = require('gulp-header');
var pkg = require('../../package.json');
var banner = ['/*!\n',
        ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
        ' * Copyright 2014-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
        ' * Licensed under <%= pkg.license %> \n',
        ' */\n\n'];
banner.join();



//compile scss to css files and
//create .map files foer easier debugging of scss files
module.exports.scss = function () {
    'use strict';
    gulp
        .src(
            'client/src/*.scss'
        )
        .pipe(sourcemaps.init())
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/css'));
};


//create .min files
module.exports.cssMinify = function () {
    'use strict';
    gulp.src('client/dist/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('client/dist/css'));
};
