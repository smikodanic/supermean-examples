var gulp = require('gulp');

//GULP Tasks
gulp.task('rimraf', require('./tasks/rimraf.js'));
// gulp.task('browserify-uglify', require('./tasks/browserify-uglify.js')(gulp));
gulp.task('browserify', require('./tasks/browserify.js'));
gulp.task('htmlmin', require('./tasks/htmlmin.js'));
gulp.task('server-nodemon', require('./tasks/server-nodemon.js')());


//gulp scss task
var scss = require('gulp-scss');
gulp.task('scss', function () {
    'use strict';
    gulp.src([
        'client/src/controller_view/**/*.scss'
    ])
        .pipe(scss({bundleExec: true}))
        .pipe(gulp.dest('client/dist/css'));
});


//gulp watchers
gulp.task('watch', function () {
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


//first delete then build /client/dist/ directory
gulp.task('build-dist', ['rimraf'], function () {
    'use strict';
    gulp.start('browserify', 'htmlmin', 'scss');
});


//defult gulp task
gulp.task('default', ['build-dist', 'watch', 'nodemon-start']);