"use strict";

var expect = require('chai').expect;

function parse(script, regex) {
    expect(script).to.match(regex);
    return regex.exec(script)[1] || '';
}

exports.ngModuleName = function(script) {
    return parse(script, /.*angular\.module\("([^"]*)",.*/);
};

exports.baseUrl = function(script) {
    return parse(script, /var urlBase = "([^"]*)";/);
};
