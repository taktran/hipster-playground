var gulp = require('gulp');

var lr = require('tiny-lr');
var refresh = require('gulp-livereload');
var server = lr();

var react = require('gulp-react');

var config =  {
  livereloadPort: 35729
};

gulp.task('livereload', function () {
  gulp.src('public/*.html')
    .pipe(refresh(server));
});

gulp.task('jsx', function () {
  gulp.src('views/templates/CommentBox.jsx')
    .pipe(react())
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', function(){
  server.listen(config.livereloadPort, function (err) {
    if (err) return console.log(err);

    gulp.watch('views/templates/*.jsx', function(event) {
      gulp.run('jsx');
    });

    gulp.watch([
      'public/js/**',
      'public/*.html'
    ], function(event) {
      gulp.run('livereload');
    });
  });
});