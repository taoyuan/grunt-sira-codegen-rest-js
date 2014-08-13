'use strict';

var grunt = require('grunt');
var s = require('./support');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:

 test.expect(numAssertions)
 test.done()

 Test assertions:

 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

// Note: the tests are depending on targets configured in Gruntfile.js

exports.sirarestjs = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    simple_default: function (test) {
        var script = grunt.file.read('tmp/simple_default.js');

        // the value "siras" is the --module-name default
        test.equal(s.ngModuleName(script), 'siras');
        // the value "/rest-api-root" is hard-coded in fixtures/app.js
        test.equal(s.baseUrl(script), '/rest-api-root');
        test.done();
    },

    simple_custom: function (test) {
        var script = grunt.file.read('tmp/simple_custom.js');
        test.equal(s.ngModuleName(script), 'customServices');
        test.equal(s.baseUrl(script), 'http://custom/api');
        test.done();
    },

    compound: function (test) {
        var script = grunt.file.read('tmp/coapp.js');

        // the value "siras" is the --module-name default
        test.equal(s.ngModuleName(script), 'siras');
        // the value "/rest-api-root" is hard-coded in fixtures/app.js
        test.equal(s.baseUrl(script), '/api');
        test.done();
    },
};
