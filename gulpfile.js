// Gulpfile.js
// Require the needed packages
'use strict';


var gulp    = require('gulp');
var stylus  = require('gulp-stylus');
var refresh = require('gulp-livereload');
var notify  = require('gulp-notify');
var clean   = require('gulp-clean');
var jade    = require('gulp-jade');
var svgmin  = require('gulp-svgmin');
var uglify  = require('gulp-uglify');
var lr      = require('tiny-lr');
var server  = lr();


// Get and render all .styl files recursively
gulp.task('stylus', function(){
    gulp.src('./assets/styles/**/*.styl')
    .pipe(stylus({
      use: ['nib'],
      import: ['nib']
    }))
    .pipe(gulp.dest('./public/styles'))
    .pipe(notify({
      message: "New styles generated!"
    }));
});

gulp.task( 'jade', function() {
  'use strict';
  gulp.src( './templates/*.jade' )
    .pipe( jade() )
    .pipe( gulp.dest('./public/') );
});

gulp.task( 'livereload', function(){
  'use strict';
  server.listen( 35729, function( err ){
    if( err ) {
      return console.log( err );
    }
  });
});

gulp.task('svg', function() {
  gulp.src('assets/images/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest('./public/images/'));
});

gulp.task('uglify', function() {
  gulp.src('assets/scripts/**/*.js')
    .pipe(uglify({outSourceMaps: true}))
    .pipe(gulp.dest('./public/scripts/'))
});

// Default gulp task to run
gulp.task('default', function(){
    gulp.run('livereload', 'stylus');
    gulp.run('stylus');
    gulp.run('jade');
    gulp.run('svg');
    gulp.run('uglify');

    gulp.watch('./assets/styles/**/*.styl', function() {
      gulp.run('stylus');
    });

    gulp.watch('./templates/**/*.jade', function() {
      gulp.run('jade');
    });

    gulp.watch('./assets/scripts/**/*.js', function() {
      gulp.run('uglify');
    })
});
