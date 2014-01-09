var gulp = require('gulp');
var lr = require('tiny-lr');
var refresh = require('gulp-livereload');
var server = lr();

var config =  {
  livereloadPort: 35729
};

gulp.task('livereload', function () {
  gulp.src('public/*.html')
    .pipe(refresh(server));
});

gulp.task('default', function(){
  server.listen(config.livereloadPort, function (err) {
    if (err) return console.log(err);

    gulp.watch([
      'public/js/**',
      'public/*.html'
    ], function(event) {
      gulp.run('livereload');
    });
  });
});