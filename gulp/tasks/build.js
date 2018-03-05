let gulp = require('gulp');
let runSequence = require('run-sequence');
let changed = require('gulp-changed');
let plumber = require('gulp-plumber');
let to5 = require('gulp-babel');
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let paths = require('../paths');
let compilerOptions = require('../babel-options');
let assign = Object.assign || require('object.assign');
let assets  = require('postcss-assets');
let jspm = require('jspm');

// Copies unmodified assets to the destination directory, keeping the source directory structure
gulp.task('copy-assets', function () {
    return gulp.src(paths.assets)
        //.pipe(changed(paths.output))
        .pipe(gulp.dest(paths.output));
});

// Copies libs to the destination directory for including in source files
gulp.task('copy-vendors', function () {
    return gulp.src(paths.vendors.src)
        .pipe(changed(paths.vendors.dest))
        .pipe(gulp.dest(paths.vendors.dest));
});

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
    return gulp.src(paths.components.js)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(sourcemaps.init(paths.loadMaps))
        .pipe(to5(assign({}, compilerOptions, {modules: 'system'})))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-system-dist', function () {
    // This was using gulp-jspm-build for better gulp integration, but it uses a very old version of JSPM builder with
    // a serious bug that prevents the package from compiling properly
    var builder = new jspm.Builder();

    var mainOptions = {
        globalDeps: {
            'github:components/jquery@1.11.3.js': 'jQuery'
        },
        sourceMaps: true,
        encodeNames: false,
        format : 'global' // recommended to use UMD/AMD, but obviously that requires a UMD/AMD loader definitely being in the page
    };

    var _packages = [
        {
            src: 'example - jquery',
            dist: 'dist/js/example.sfx.js',
            type: 'buildStatic',
            options: mainOptions
        }
    ];

    _packages.forEach(function(_package) {
        builder[_package.type].call(builder, _package.src, _package.dist, _package.options);
    });
});


// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence

gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['copy-assets', 'copy-vendors', 'build-view-templates'],
        [ 'build-system','build-template'],
        'build-system-dist',
        callback
    );
});
