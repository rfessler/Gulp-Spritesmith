'use strict';

/*******************************************************************************
1. DEPENDENCIES
*******************************************************************************/
// Include gulp
var gulp = require('gulp'),		// gulp core

// Include Plugins
	pkg = require('./package.json'),
	bowerFiles = require("gulp-bower-files"),
	plumber = require('gulp-plumber'),                  // disable interuption
	gutil = require('gulp-util'),
	clean = require('gulp-clean'),
	stripDebug = require('gulp-strip-debug'),			
	sass = require('gulp-ruby-sass'),					// sass compiler
	autoprefixer = require('gulp-autoprefixer'),		// sets missing browserprefixes
	minifycss = require('gulp-minify-css'),             // minify the css files
	concat = require('gulp-concat'),					// concatinate js
	jshint = require('gulp-jshint'),					// check if js is ok
	stylish = require('jshint-stylish'),                // make errors look good in shell
	uglify = require('gulp-uglify'),					// uglifies the js
	rename = require('gulp-rename'),					// rename files
	browserSync = require('browser-sync'),              // inject code to all devices
	spritesmith = require('gulp-spritesmith'),			// sprite images
	gulpif = require('gulp-if')						// conditionally control the flow of streams.
;

/**
* Define prod CLI flag
* Run `gulp --prod`
*/
var isprod = gutil.env.prod;




/*******************************************************************************
6. SPRITES
*******************************************************************************/
gulp.task('sprites', function () {
    return  gulp.src('images/**/*.png')
                .pipe(spritesmith({
                    imgName: 'sprite.png',
                    styleName: 'sprite.css',
                    imgPath: 'dist/sprites/sprite.png',
                    groupBy: 'sprites'
                }))
                .pipe(gulpif('*.png', gulp.dest('dist/sprites/img')))
                .pipe(gulpif('*.css', gulp.dest('dist/sprites/css/')));
});



gulp.task('default', function(){
	gulp.start('sprites');
});