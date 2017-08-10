var gulp = require('gulp');
var clean = require('gulp-clean');

// Stylesheet transpiling
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var nano = require('cssnano');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

// Clean all of our old css files
gulp.task('clean', function() {    
    return gulp.src(['./bin/*.css', './bin/colours/*.css'])
        .pipe(clean());
});

// Compile less files (css preprocessor)
gulp.task('full:minify', function() {
    var processors = [autoprefixer, nano];    
    return gulp.src('./lib/blip-full.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./bin'))
});

gulp.task('full:verbose', function() {
    var processors = [autoprefixer];    
    return gulp.src('./lib/blip-full.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./bin'))
});

gulp.task('cutdown:minify', function() {
    var processors = [autoprefixer, nano];    
    return gulp.src('./lib/blip-cutdown.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./bin'))
});

gulp.task('cutdown:verbose', function() {
    var processors = [autoprefixer];    
    return gulp.src('./lib/blip-cutdown.scss')
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

gulp.task('transpile', ['clean', 'full:minify', 'full:verbose']);
gulp.task('dev', ['clean', 'full:verbose', 'cutdown:verbose', 'verbose-colours']);
gulp.task('release', function() {
    runSequence('clean', ['full:minify', 'cutdown:minify','minify-colours'], ['full:verbose', 'cutdown:verbose', 'verbose-colours']);
});