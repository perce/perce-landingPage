// Gulpfile.js
// Require the needed packages


var gulp    = require('gulp');
var stylus  = require('gulp-stylus');
var refresh = require('gulp-livereload');
var notify  = require('gulp-notify');
var clean   = require('gulp-clean');
var jade    = require('gulp-jade');
var lr      = require('tiny-lr');
var server  = lr();


// Get and render all .styl files recursively
gulp.task('stylus', function(){
  'use strict';
  gulp.src('./assets/styles/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./public/styles'))
  .pipe(notify({
      message: 'New styles generated!'
    }));
});

gulp.task('jade', function() {
  'use strict';
  gulp.src('./templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('livereload', function(){
  'use strict';
  server.listen(35729, function(err){
    if(err) {
      return console.log(err);
    }
  });
});



// Default gulp task to run
gulp.task('default', function(){
  'use strict';
  gulp.run('livereload', 'stylus');
  gulp.run('stylus');
  gulp.run('jade');

  gulp.watch('./assets/styles/**/*.styl', function() {
    gulp.run('stylus');
  });

  gulp.watch('./templates/**/*.jade', function() {
    gulp.run('jade');
  });

});
