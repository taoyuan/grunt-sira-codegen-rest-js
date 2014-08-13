'use strict';

var path = require('path');
var resolve = require('resolve');
var generator = require('sira-sdk-rest-js');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('sirarestjs',
        'Grunt plugin for auto-generating javascript services for Sira Rest API',
        runTask);

    function runTask() {
        /*jshint validthis:true */

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            framework: 'default',
            moduleName: 'siras',
            template: 'angular',
            apiUrl: undefined
        });

        if (!options.output) {
            grunt.fail.warn('Missing mandatory option "output".');
        }

        options.input = options.input || path.resolve('./');

        var source = resolveSource(options.input);
        var framework = resolveFramework(options.framework);

        var sapp = framework.load(source);

        options.apiUrl = options.apiUrl || '/api';

        grunt.log.writeln('Generating %j for the API endpoint %j',
            options.moduleName,
            options.apiUrl);

        var script = generator.services(sapp, options.moduleName, options.apiUrl);

        grunt.file.write(options.output, script);

        grunt.log.ok('Generated %j services file %j', options.template, options.output);
    }
};

function resolveSource(source) {
    return require(resolve.sync(source, {basedir: path.resolve('./')}));
}

function resolveFramework(framework) {
    return require(resolve.sync('./' + framework, {basedir: path.join(__dirname, 'frameworks')}));
}
