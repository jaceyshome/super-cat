var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

function watchAndRun(dir, tasks) {
	gulp.watch(dir, tasks.concat([ browserSync.reload ])).on('change', reportChange);
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function () {
    watchAndRun(paths.components.js, [ 'build-system']);
    watchAndRun(paths.view.source, ['build-view-templates', 'build-system']);
    watchAndRun(paths.assets, ['copy-assets']);
    watchAndRun(paths.template.source, ['build-template']);
    watchAndRun(paths.demo.source, ['build-template']);
});
