var voya = require('voya');
var express = require('express');
var rest = require('sira-express-rest');

var sapp = voya({'model public': false, 'modules': [__dirname]});
sapp.registry.define('Product', {
    public: true,
    crud: true
});
sapp.boot();

var app = express();
app.sapp = sapp;
app.use('/rest-api-root', rest(sapp));

module.exports = app;
