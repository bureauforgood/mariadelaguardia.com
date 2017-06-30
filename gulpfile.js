// Maria De La Guardia Pages

// TASKS
// ------
// `gulp`: watch, compile styles and pug, browsersync


// PLUGINS
// --------
var autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  cssnano = require('gulp-cssnano'),
  gulp = require('gulp'),
  notify = require('gulp-notify'),
  p = require('./package.json'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass');


// VARIABLES
// ----------
var dist = 'dist/',
  source = 'src/';


// ERROR HANDLING
// ---------------
function handleError() {
  this.emit('end');
}

// BUILD SUBTASKS
// ---------------

// Styles
gulp.task('styles', function() {
  return gulp.src([
    source+'scss/style.scss'
  ])
  .pipe(sass()
    .on('error', handleError)
    .on('error', notify.onError()))
  .pipe(autoprefixer())
//    .pipe(cssnano())
  .pipe(gulp.dest(dist+'css/'))
  .pipe(browserSync.stream());
});

// Compile Pug
gulp.task('pug',function() {
  return gulp.src(source+'views/*.pug')
  .pipe(pug({
    doctype: 'html',
    basedir: source,
    pretty: true
  }))
  .pipe(gulp.dest(dist))
  .pipe(browserSync.stream());
});

// Copy Images
gulp.task('copy', function() {
  gulp.src([source+'img/**/*'])
  .pipe(gulp.dest(dist+'img'))
  .pipe(browserSync.stream());
});

// BUILD TASKS
// ------------

gulp.task('default', function() {

  gulp.start('styles', 'pug', 'copy');

  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });

  // Watch .scss files
  gulp.watch(source+'scss/**/*.scss', ['styles']);

  // Watch index file
  gulp.watch(source+'views/**/*.pug', ['pug']);

  // Watch images directory
  gulp.watch(source+'img/**/*', ['copy']);

});
