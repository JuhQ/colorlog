const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');

const files = ['main.js'];

gulp.task('lint', () =>
  gulp.src(files)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('default', ['lint'], () =>
  gulp.watch(files, ['lint'])
);
