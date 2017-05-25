var gulp = require('gulp');
var gulpsass = require('gulp-sass');
var cssminify = require('gulp-clean-css');
var clean = require('gulp-clean');
var htmlcpr = require('gulp-htmlcpr');
var connect = require('gulp-connect');
var minifyjs = require('gulp-minify');
const image = require('gulp-image');

var paths = {
  cssscripts: ['src/**/*.scss', 'src/**/*.js'],
  html: 'src/*.html',
  image: 'src/images/*'
};

//clean folder
gulp.task("clean", function(){
      return gulp.src('build', {read: false})
        .pipe(clean())
});

//sass to css
gulp.task("sasscss", function(){
	gulp.src('src/css/*.scss')
      .pipe(gulpsass())
      .pipe(gulp.dest('src/css'));
});

//sass to css and minify
gulp.task("sasscssmini", function(){
	gulp.src('src/css/*.scss')
      .pipe(gulpsass())
      .pipe(cssminify())
      .pipe(gulp.dest('build/css'));
});

//js minify
gulp.task("minifyjs", function(){
	gulp.src('src/js/*.js')
      .pipe(minifyjs())
      .pipe(gulp.dest('build/js'));
});

//copy html
gulp.task("copyhtml", function(){
	gulp.src('src/*.html')
      .pipe(htmlcpr())
      .pipe(connect.reload())
      .pipe(gulp.dest('build'));
});
//copy image
gulp.task('copyimage', function () {
  gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('build/images'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.cssscripts, ['sasscss','minifyjs','sasscssmini']);
  gulp.watch(paths.html, ['copyhtml']);
  gulp.watch(paths.images, ['copyimage']);
});

//Servers
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 3000,
    livereload: true
  });
  
});


gulp.task('default', ['watch','sasscss','sasscssmini','minifyjs','copyhtml','copyimage']);