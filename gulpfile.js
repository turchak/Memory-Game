const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');


const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');

const config = {
  src: 'src',
  dist: 'dist'
}

gulp.task('minify', function() {
  return gulp.src(config.src+'/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.dist))
    .pipe(browserSync.stream());
});

gulp.task('scss', function () {
  return gulp.src(config.src+'/assets/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist+'/assets/css'))
    .pipe(browserSync.stream());
});

function bundle (bundler) {
  bundler
    .bundle()
    .pipe(source(config.src+'/assets/js/main.js'))
    .pipe(buffer())
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist+'/assets/js/'))
    .pipe(browserSync.stream());
}

gulp.task('js', function () {
  const bundler = browserify(config.src+'/assets/js/main.js')
    .transform(babelify, {
      presets : ['es2015']
    });
  bundle(bundler);
});



gulp.task('watch', function() {
  browserSync.init({
          server: './'+config.dist
  });
  gulp.watch(config.src+'/*.html', ['minify']);
  gulp.watch(config.src+'/assets/scss/**/*.scss', ['scss']);
  gulp.watch(config.src+'/assets/js/**/*.js', ['js']);
});






gulp.task('default', ['watch','minify', 'scss', 'js']);
