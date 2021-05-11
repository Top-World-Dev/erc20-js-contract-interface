var gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('compress', function() {
    gulp.src('./scripts/*.js')
        .pipe(minify({
            ignoreFiles: ['*.combo.js', '*-min.js', '*.min.js']
        }))
        .pipe(gulp.dest('./scripts'))
});

gulp.task('watch', ['compress']);
gulp.task('default', ['watch']);