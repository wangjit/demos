var gulp = require('gulp');

var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

gulp.task('build:css', function () {
  gulp.src('css/*.css')
    .pipe(concat('merge.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('build:js', function () {
  gulp.src('js/src/*.js')
    .pipe(uglify())
    .pipe(concat('merge.min.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('build:img', function () {
  gulp.src('*.jpeg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs/'))
});

gulp.task('build', ['build:css', 'build:js', 'build:img']);