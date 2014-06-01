'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');


gulp.task('build', function () {
  return gulp.src(['src/poliglota.js'])
    .pipe(browserify({standalone: 'poliglota'}))
    .pipe(uglify({mangle: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
  return gulp.src(['test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(mocha({reporter: 'dot'}));
});

gulp.task('clean', function () {
  rimraf('dist', function (err) {
    if (err) {
      process.stdout.write('"clean" gulp task raised an error: ' + err);
      process.exit(1);
    }
  });
});

gulp.task('default', ['test', 'build']);
