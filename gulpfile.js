// Gulpfile.js
// Require the needed packages

var gulp    = require('gulp');
var stylus  = require('gulp-stylus');
var refresh = require('gulp-livereload');
var notify  = require('gulp-notify');
var clean   = require('gulp-clean');
var lr      = require('tiny-lr');
var server  = lr();


// Get and render all .styl files recursively
gulp.task('stylus', function(){
    gulp.src('./assets/styles/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/styles'))
    .pipe(notify({
      message: "New styles generated!"
    }));;
});

gulp.task('livereload', function(){
    server.listen(35729, function(err){
        if(err) return console.log(err);
    });
});



// Default gulp task to run
gulp.task('default', function(){
    gulp.run('livereload', 'stylus');
    gulp.run('stylus');

    gulp.watch('./assets/styles/**/*.styl', function(event) {
      gulp.run('stylus')
    });

});