"use strict";

/**
 *
 * @param source
 */
exports.load = function load(source) {
    var app, compound;
    if (typeof source === 'function') {
        app = source();
        compound = app.compound;
    }
    if (!compound) {
        throw new Error('Invalid source for framework compound');
    }

    compound.init();

    return compound.sapp || app.sapp;
};