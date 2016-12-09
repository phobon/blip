var gulp = require('gulp');
var clean = require('gulp-clean');

// Stylesheet transpiling
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var nano = require('cssnano');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');

// Clean all of our old js files
gulp.task('clean', function() {    
    return gulp.src(['./public/scripts/*.js'])
        .pipe(clean());
});

// Compile less files (css preprocessor)
gulp.task('minify', function() {
    var processors = [autoprefixer, nano];    
    return gulp.src('./src/blip.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./bin'))
});

gulp.task('verbose', function() {
    var processors = [autoprefixer];    
    return gulp.src('./src/blip.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./bin'))
});

gulp.task('transpile', ['clean', 'minify', 'verbose']);