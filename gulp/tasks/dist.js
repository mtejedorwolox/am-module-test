import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

gulp.task('dist', () => {
    return gulp.src(`./src/**/*.js`)
        .pipe(plugins.order([
            "vendor/**/*.js",
            "app/app.module.js",
            "app/app.config.js",
            "app/services/identity.service.js",
            "app/services/**/*.js",
            "app/directives/**/*.js"
          ]))
        .pipe(plugins.concat(`am-communications.js`))
        .pipe(gulp.dest('./dist/'));
//        .pipe(plugins.uglify())
//        .pipe(plugins.rename({extname: '.min.js'}))
//        .pipe(gulp.dest('./dist/'));
});
