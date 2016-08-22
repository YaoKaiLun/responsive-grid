/**
 * Created by yaoka on 2016/8/9.
 */
var gulp = require('gulp');
var sass = require('gulp-sass-china');

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

/*gulp.task('watch', function () {
    var watcher =  gulp.watch('./sass/!**.scss', ['sass']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});*/

gulp.task('default', function() {
    gulp.start('sass');
});