import gulp from 'gulp';
import bowerSrc from 'gulp-bower-src';

gulp.task('bower', function () {
  bowerSrc()
    .pipe(gulp.dest('build/bower_components'));
});
