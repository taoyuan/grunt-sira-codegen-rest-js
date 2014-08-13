"use strict";

module.exports = function (compound) {
    var app = compound.app;
    app.set('sapp', {
        'model public': false
    });
};