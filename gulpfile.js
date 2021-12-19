const {src, dest, watch, parallel, series} = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const gulpSquoosh = require('gulp-squoosh');

const watcher = () => {
  browserSync.init({
    server: './release',
  });

  watch('./source/**/*.html', html).on('change', browserSync.reload);
  watch('./source/less/**/*.less', css);
  watch('./source/js/**/*.js', scripts);
  watch('./source/fonts/**/*.*', fonts);
  watch('./source/img/*', image);
};

const html = () => {
  return src('./source/**/*.html').pipe(dest('./release'));
};

const css = () => {
  return src('./source/less/styles.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minCSS())
    .pipe(rename('styles.min.css'))
    .pipe(dest('./release/css/'))
    .pipe(browserSync.stream());
};

const image = () => {
  return src('./source/img/*').pipe(dest('./release/img'));
};

const scripts = () => {
  return src('./source/js/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest('./release/js'))
    .pipe(browserSync.stream());
};

const fonts = () => {
  return src('./source/fonts/**/*.*').pipe(dest('./release/fonts'));
};

exports.dev = series(parallel(html, fonts, css, scripts, image), watcher);
