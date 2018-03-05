var path = require('path');

var appRoot = 'src/';
var demoRoot = 'demo/';
var outputRoot = 'dist/';
var testRoot = 'spec/';


module.exports = {
    loadMaps: {loadMaps: false},
    root: appRoot,
    components: {
        // The use of the glob pattern here is to trick gulp into treating "assets" and "js" as part of the
        // destination path, rather than the source path (e.g. copy from src/* to dist/* rather than src/assets/* to dist/*).
        js: appRoot + '@(components|services|js|!vendor)/**/*.js'
    },
    sass: appRoot + '@(styles)/**/*.scss',
    assets: [
        appRoot + '**/*.css',

        // Images
        appRoot + '@(components)/**/*.svg',

        // Same as with the above glob pattern in "source"
        appRoot + '@(assets|js-legacy|vendor)/**/*',

        // mock json
        appRoot + '@(components)/**/*.json'
    ],
    //When the vendors has assets and css, it is better to be copied into style/vendors folder.
    vendors: {
        src: [],
        dest:  outputRoot + 'styles/vendor'
    },
    output: outputRoot,
    view:{
        source: `${appRoot}components/**/*-tpl.html`,
        output: `${outputRoot}components/`
    },
    demo : {
        source: demoRoot + '**/*.html',
        output: outputRoot + 'demo/'
    },
    template : {
        source: appRoot + "**/*.html",
        output: outputRoot,
        sitePathValueVariable: '<%=sitePathValue%>',
        ssiIncludeVariable: "${sitePath}",
        assetSitePathVariable: '<!--#echo var="sitePath" -->'
    }
};
