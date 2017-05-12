var gulp = require('gulp');
var clean = require('gulp-clean');

// Stylesheet transpiling
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var nano = require('cssnano');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');

// Clean all of our old css files
gulp.task('clean', function() {    
    return gulp.src(['./bin/*.css', './bin/colours/*.css'])
        .pipe(clean());
});

// Compile less files (css preprocessor)
gulp.task('minify', function() {
    var processors = [autoprefixer, nano];    
    return gulp.src('./lib/blip.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./bin'))
});

gulp.task('verbose', function() {
    var processors = [autoprefixer];    
    return gulp.src('./lib/blip.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./bin'))
});

gulp.task('minify-colours', function() {
    var processors = [autoprefixer, nano];    
    return gulp.src('./lib/colours/*.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename({ prefix: 'blip.c.', suffix: '.min' }))
        .pipe(gulp.dest('./bin/colours'))
});

gulp.task('verbose-colours', function() {    
    var processors = [autoprefixer];    
    return gulp.src('./lib/colours/*.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename({ prefix: 'blip.colours.' }))
        .pipe(gulp.dest('./bin/colours'))
});

gulp.task('transpile', ['clean', 'minify', 'verbose']);
gulp.task('dev', ['clean', 'verbose', 'verbose-colours']);
gulp.task('release', ['clean', 'minify', 'minify-colours']);