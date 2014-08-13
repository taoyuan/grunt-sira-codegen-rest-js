"use strict";

exports.load = function load(source, cb) {
    var app, compound;
    if (typeof source === 'function') {
        app = source();
        compound = app.compound;
    }
    if (!compound) {
        throw new Error('Invalid source for framework compound');
    }

    compound.init();

    var sapp = compound.sapp || app.sapp;
    sapp.ready(cb);
};