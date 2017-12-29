const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('checkin', () => {
    gulp.src('build/**/*')
        .pipe(gulp.dest('dist'));
});

// gulp.task('copy:build', () => {
//     gulp.src(['!build/**/*.js', 'build/**/*'])
//         .pipe(gulp.dest('dist'));
// });

gulp.task('copy:build', () => {
    gulp.src('build/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:package', () => {
    gulp.src('src/lib/package.json')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    gulp.src(['build', 'dist'], { read: false })
        .pipe(clean());
})

gulp.task('assets:scss', () => {

});