let gulp = require('gulp');
let path = require('path');
let runSequence = require('run-sequence');
let paths = require('../paths');
let replace = require('gulp-replace');
let tap = require('gulp-tap');
let fs = require('fs');
let process = require('process');
/**
 *
 */
function insertSsiValuable(file) {
    file.contents = new Buffer((`<!--#set var="sitePath" value="<%=sitePathValue%>" -->${String(file.contents)}`))
}


/**
 * Update demo page global relative path
 * @param file - html template
 * It will
 *   @example
 *      change <!--#set var="sitePath" value="<%=sitePathValue%>" -->
 *      to     <!--#set var="sitePath" value="../" -->
 *
 */
function parsePath(file) {

    let sitePath = '';
    let offset = 2;

    let sourceDepth = file.path.replace(file.cwd, '').split(/\/|\\/).length - offset;
    for (let i = 0; i < sourceDepth; i++) {
        sitePath += "../";
    }

    if (sitePath === '') {
        sitePath = '../';
    }

    //HACK: for ssi include path for style guide docs. which has to include "dist/"
    if(file.path.includes("/dist/docs/") || file.path.includes("\\dist\\docs\\") ) {
        sitePath += '/dist/';
    }

    //set global site path value
    file.contents = new Buffer(String(file.contents)
        .replace(new RegExp(paths.template.sitePathValueVariable, 'g'), sitePath)

    );
}

/**
 * Scan the html template, find and update the file paths, so the ssi server will find the sources by the relative path value on loading the page.
 * @param file - html template
 *
 * Add ssi variable ${sitePath} to ssi include path
 *   @example
 *      change <!--#include virtual="demo/partials/head-libs.html" -->
 *      to     <!--#include virtual="${sitePath}demo/partials/head-libs.html" -->
 *
 *   But it will skip the condition if the path start with "." such as "./", "../"
 *   @example in /demo/partials/header-mobile-navigation.html
 *             <!--#include virtual="./secondary-navigation.html" -->
 *
 *
 * Add ssi variable <!--#echo var="sitePath" --> to assets and source file path
 *   @example
 *      change <img src="assets/img/0.gif" />
 *      to     <img src="<!--#echo var="sitePath" -->assets/img/0.gif" />
 *
 *
 * Add ssi variable <!--#echo var="sitePath" --> to in html page css style url
 *   @example https://regex101.com/r/mG9rO3/3
 *   @example
 *      change background-image:url('assets/img/temp/demo.png');
 *      to     background-image:url('<!--#echo var="sitePath" -->assets/img/temp/demo.png');
 *
 */

function addSitePathVariable(file) {

    file.contents = new Buffer(String(file.contents)

        //add variable ${sitePath} to ssi include virtual path
        .replace(new RegExp('<!--#include virtual="([^\.].+?)"', 'g'), function(match, includePath) {
            return `<!--#include virtual="${paths.template.ssiIncludeVariable}${includePath}"`;
        })

        //add variable <!--#echo var="sitePath" --> to assets path. e.g. src="assets/img/0.gif"
        .replace(new RegExp('="(assets|js-legacy|js|styles|..\/jspm_packages)\/(.+?)"', 'g'), function(match, p1, p2) {
            return `="${paths.template.assetSitePathVariable}${p1}/${p2}"`;
        })

        //add variable <!--#echo var="sitePath" --> to in html page css style url
        .replace(new RegExp(/url\(\s?(\'|")?\s?assets\/(.+?)\)/g), function(match, p1, p2) {
            return `url(${p1}${paths.template.assetSitePathVariable}assets/${p2})`;
        })

    );
}

/**
 * The function will replace '../' in ssi virtual include path with 'components/'
 * The style guide docs requires different component path with demo pages,
 * so this function will update '../' component virtual include path for style guide
 * @example
 * Before
 * <!--#include virtual="../text-image/text-body.html" -->
 * After
 * <!--#include virtual="../text-image/text-body.html" -->
 *
 * @param file - style guide demo html template in dist/docs
 */
function correctStyleGuideSSIComponentPath(file) {
    file.contents = new Buffer(String(file.contents)

        //add variable ${sitePath} to ssi include virtual path
        .replace(new RegExp('<!--#include virtual="(\.\.\/)([^\.].+?)"', 'g'), function(match, p1, p2) {
            return `<!--#include virtual="components/${p2}"`;
        })

    );
}

/**
 * Save file changes to the file.
 * @param file - html file
 */
function saveFile(file) {
    fs.writeFile(file.path, new Buffer(file.contents), 'UTF-8')
}

/**
 * Copy demo htmls from src to dist folder
 */
gulp.task('copy-demo', function () {
    return gulp.src(paths.demo.source, {base: paths.output})
        .pipe(tap(parsePath))
        .pipe(tap(addSitePathVariable))
        .pipe(gulp.dest(paths.demo.output));
});

/**
 * Copy src html demo templates
 */
gulp.task('copy-src-template', function () {
    return gulp.src(paths.template.source)
        .pipe(tap(addSitePathVariable))
        .pipe(gulp.dest(paths.template.output));
});

/**
 * Build template task
 */
gulp.task('build-template', function (callback) {
    return runSequence(
        'copy-demo',
        'copy-src-template',
        callback
    );
});

/**
 * Update style guide htmls ssi virtual include paths
 */
gulp.task('parse-path-styleguide-ssi', function(callback) {
    return gulp.src(`${paths.styleGuide.output}/**/*.html`, {base: paths.output})
        .pipe(tap(insertSsiValuable))
        .pipe(tap(parsePath))
        .pipe(tap(correctStyleGuideSSIComponentPath))
        .pipe(tap(addSitePathVariable))
        .pipe(tap(saveFile))
});
