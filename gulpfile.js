// it supports writing es6 for gulp tasks
require('babel-register')({
    presets: ["es2015"]
});

// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('gulp/tasks');
