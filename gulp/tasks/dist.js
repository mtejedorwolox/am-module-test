import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

gulp.task('dist', () => {
    return gulp.src(`./src/**/*.js`)
//        .pipe(plugins.order(config.jsOrder))
        .pipe(plugins.concat(`am-communications.js`))
        .pipe(gulp.dest('./dist/'))
});
