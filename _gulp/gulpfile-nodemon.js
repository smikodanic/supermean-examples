var gulp = require('gulp');

//GULP Tasks
gulp.task('rimraf', require('./tasks/rimraf.js'));
// gulp.task('browserify-uglify', require('./tasks/browserify-uglify.js')(gulp));
gulp.task('browserify', require('./tasks/browserify.js'));
gulp.task('htmlmin', require('./tasks/htmlmin.js'));
gulp.task('server-nodemon', require('./tasks/server-nodemon.js')());
gulp.task('scss', require('./tasks/scss-compass.js')(gulp));


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


//first delete then create JS, HTML and CSS files in /client/dist/ directory
gulp.task('build-dist', ['rimraf'], function () {
    'use strict';
    setTimeout(function () {
        gulp.start('browserify', 'htmlmin', 'scss');
    }, 1300);
});



//defult gulp task
gulp.task('default', ['build-dist', 'watch', 'nodemon-start']);
