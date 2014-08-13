"use strict";

exports.load = function load(source, cb) {
    var sapp = source.sapp || source;
    sapp.ready(cb);
};