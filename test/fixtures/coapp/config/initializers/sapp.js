"use strict";

var voya = require('voya');

module.exports = function (compound) {
    var app = compound.app;
    var sapp = compound.sapp = voya(app.get('sapp'));
    sapp.boot();
};