'use strict';

module.exports = function (grunt) {

    // Project configuration.
    //noinspection JSHint
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        exec: {
            compound_npm_install: {
                command: 'npm install',
                cwd: './test/fixtures/coapp'
            }
        },

        // Configuration to be run (and then tested).
        sirarestjs: {
            simple_default: {
                options: {
                    input: './test/fixtures/simple/app.js',
                    output: 'tmp/simple_default.js'
                }
            },
            simple_custom: {
                options: {
                    input: './test/fixtures/simple/app.js',
                    output: 'tmp/simple_custom.js',
                    moduleName: 'customServices',
                    url: 'http://custom/api/'
                }
            },
            compound: {
                // !!! all valuable options is here
                options: {
                    framework: 'compound', // the framework for input, currently support `default` and `framework`
                    input: './test/fixtures/coapp', // the input module for sira app
                    output: 'tmp/coapp.js', // the sdk output file
                    moduleName: 'siras', // the service module name
                    url: 'http://coapp/api', // the api base url
                    resultful: true, // true for all response data will be wrapped into object
                    description: '' // the service module description
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*.test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'exec', 'sirarestjs', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
