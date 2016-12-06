var 
	gulp = require('gulp'),
	bump = require('gulp-bump'),
	csslint = require('gulp-csslint')
	cleanCss = require('gulp-clean-css'),
	gulpIf = require('gulp-if'),
	jshint = require('gulp-jshint'),
	tagVersion = require('gulp-tag-version'),
	uglify = require('gulp-uglify'),
	useref = require('gulp-useref'),
	yargs = require('yargs');

gulp.task('default', ['build']);
gulp.task('build', ['html', 'css', 'image', 'font', 'js']);

gulp.task('html', function () {
	gulp.src(['*.html'])
	.pipe(useref())
	.pipe(gulpIf(/^.*[^\.][^m][^i][^n]\.js$/, uglify()))
	.pipe(gulpIf('*.css', cleanCss()))
	.pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
	gulp.src(['css/*.css'])
	.pipe(csslint())	
	.pipe(csslint.formatter())
	.pipe(cleanCss())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('image', function () {
	gulp.src(['image/*.*'])
	.pipe(gulp.dest('dist/image'));
});

gulp.task('font', function () {
	gulp.src(['image/*.*'])
	.pipe(gulp.dest('dist/font'));
});

gulp.task('js', function () {
	gulp.src(['js/*'])
	.pipe(gulp.dest('dist/js'));
});

gulp.task('bump', function () {
	/// <summary>
	/// It bumps revisions
	/// Usage:
	/// 1. gulp bump : bumps the package.json and bower.json to the next prerelease revision.
	///   i.e. from 0.1.1-25 to 0.1.1-26
	/// 2. gulp bump --set-version 1.1.1 : bumps/sets the package.json and bower.json to the 
	///	specified revision.
	/// 3. gulp bump --type major	   : bumps 1.0.0 
	///	gulp bump --type minor	   : bumps 0.1.0
	///	gulp bump --type patch	   : bumps 0.0.2
	///	gulp bump --type prerelease  : bumps 0.0.1-2
	/// </summary>
	var args = yargs.argv;
	var type = args.type;
	var version = args['set-version'];
	var options = {};
	if (typeof version !== 'undefined') {
		options.version = version;
	} else if(typeof type !== 'undefined') {
		options.type = type;
	} else {
		options.type = 'prerelease';
	}
	return gulp
		.src(['package.json', 'bower.json'])
		.pipe(bump(options))
		.pipe(gulp.dest('./'));
});

gulp.task('tag', function() {
	return gulp.src(['package.json']).pipe(tagVersion());
});

