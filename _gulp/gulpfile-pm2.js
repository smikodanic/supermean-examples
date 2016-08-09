var gulp = require('gulp');
var config = require('../server/app/config');

//GULP Tasks
gulp.task('rimraf', require('./tasks/rimraf.js'));
// gulp.task('browserify-uglify', require('./tasks/browserify-uglify.js')(gulp));
gulp.task('browserify', require('./tasks/browserify.js'));
gulp.task('htmlmin', require('./tasks/htmlmin.js'));
gulp.task('on-ctrl-c', require('./tasks/on-ctrl-c.js')(gulp));
gulp.task('server-pm2', require('./tasks/server-pm2.js')(config));
gulp.task('scss', require('./tasks/scss-compass.js')(gulp));



//GULP Watches
gulp.task('watch', function () {
    'use strict';

    //*** watch server side
    gulp.watch([
        'server/app/views/**/*.ejs',
        'server/app/**/*.js'
    ], ['pm2-restart']);



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


gulp.task('default', ['build-dist', 'watch', 'on-ctrl-c'], function () {
    'use strict';
    gulp.start('pm2-start');
});
