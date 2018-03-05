var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var rename = require("gulp-rename");
var tap = require('gulp-tap');
var path = require('path');
var through = require('through-gulp');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var superviews = require("superviews.js");
var _ = require("lodash");

const options = {
    name: "templateFn",
    argstr: "vm",
    mode: "es6"
};

function interpolateViewTemplate(file, encoding, callback) {
    if (file.isBuffer()) {
        var name = `${_.camelCase(file.path.split(/\/|\\/).pop().replace('.html', ''))}Fn`;
        var templateFile = new Buffer(decoder.write(file.contents));
        templateFile = superviews(
            decoder.write(templateFile)
                .replace(/<require from=/g,"<delegating-import from=")
                .replace(/<\/require>/g,"</delegating-import>")
                .replace(/[\n\t\r]/g," ")
                .replace(/ (\w*)\.((trigger)|(delegate))="([^"]+)"/g," on$1=\"{$event.preventDefault();$5}\""),
            name, options.argstr, options.mode
        );
        file.contents = new Buffer(`//jshint-ignore\n${templateFile}\n//jshint-ignore-end`);
    }
    this.push(file);
    callback();
}


gulp.task('build-view-templates', function(){
    return gulp.src(paths.view.source)
        .pipe(through(interpolateViewTemplate, function(callback){
            callback();
        }))
        .pipe(rename({extname: ".js"}))
        .pipe(gulp.dest(paths.view.output));
});

