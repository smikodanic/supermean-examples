var config = require('../server/app/config');
var gulp = require('gulp');

//GULP Tasks
gulp.task('rimraf', require('./tasks/rimraf.js'));
// gulp.task('browserify-uglify', require('./tasks/browserify-uglify.js')(gulp));
gulp.task('browserify', require('./tasks/browserify.js'));
gulp.task('htmlmin', require('./tasks/htmlmin.js'));
gulp.task('server-nodemon', require('./tasks/server-nodemon.js')());


var scss = require('gulp-scss');
gulp.task('scss', function () {
    'use strict';
    gulp.src([
        'client/src/controller_view/**/*.scss'
    ])
        .pipe(scss({bundleExec: true}))
        .pipe(gulp.dest('client/dist/css'));
});



//GULP Watches
gulp.task('watch', ['htmlmin', 'browserify'], function () {
    'use strict';

    //*** watch client side
    gulp.watch([
        'client/src/**/*.js'
    ], ['browserify']);

    gulp.watch([
        'client/src/**/*.html'
    ], ['htmlmin']);

    gulp.watch([
        'client/src/**/*.scss'
    ], ['scss']);

});


//build /client/dist/ directory
gulp.task('build-dist', ['rimraf', 'browserify', 'htmlmin', 'scss']);


gulp.task('default', ['build-dist', 'watch', 'nodemon-start']);