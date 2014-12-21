var gulp   = require('gulp');
var jsmin  = require('gulp-jsmin');
var rename = require('gulp-rename');
var zip    = require('gulp-zip');

// Minify bundle.js file
gulp.task('min', function(){
	gulp.src('js/bundle.js')
		.pipe(jsmin())
		.pipe(gulp.dest('js'));
});

// zip project
gulp.task('zip', function(){
	return gulp.src('**')
		.pipe(zip('www.zip'))
		.pipe(gulp.dest('../'));
});
