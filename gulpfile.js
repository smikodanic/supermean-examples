var config = require('./server/app/config');
var gulp = require('gulp');

//GULP Tasks
gulp.task('rimraf', require('./gulp/tasks/rimraf.js'));
// gulp.task('browserify-uglify', require('./gulp/tasks/browserify-uglify.js')(gulp));
gulp.task('browserify', require('./gulp/tasks/browserify.js'));
gulp.task('htmlmin', require('./gulp/tasks/htmlmin.js'));
gulp.task('on-ctrl-c', require('./gulp/tasks/on-ctrl-c.js')(gulp));
require('./gulp/tasks/server-pm2.js')(config);


var scss = require('gulp-scss');
gulp.task('scss', function () {
    'use strict';
    gulp.src([
        './client/src/controller_view/**/*.scss'
    ])
        .pipe(scss({bundleExec: true}))
        .pipe(gulp.dest('client/dist/css'));
});



//GULP Watches
gulp.task('watch', ['htmlmin', 'browserify'], function () {
    'use strict';

    //*** watch server side
    gulp.watch([
        './server/app/views/**/*.ejs',
        './server/app/**/*.js'
    ], ['pm2-restart']);



    //*** watch client side
    gulp.watch([
        './client/src/**/*.js'
    ], ['browserify']);

    gulp.watch([
        './client/src/**/*.html'
    ], ['htmlmin']);

    gulp.watch([
        './client/src/**/*.scss'
    ], ['scss']);

});


//build /client/dist/ directory
gulp.task('build-dist', ['rimraf', 'browserify', 'htmlmin', 'scss']);


gulp.task('default', ['pm2-stop', 'build-dist', 'watch', 'on-ctrl-c'], function () {
    'use strict';
    gulp.start('pm2-start');
});