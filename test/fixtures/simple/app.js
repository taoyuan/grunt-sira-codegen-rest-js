var voya = require('voya');
var express = require('express');
var rest = require('sira-express-rest');

var sapp = voya();
sapp.disable('model public');
sapp.set('rest', {url: '/rest-api-root'});
sapp.module(__dirname);
sapp.registry.define('Product', {
    public: true,
    crud: ["create"]
});
sapp.boot();

var app = express();
app.sapp = sapp;
app.use(sapp.get('rest.url') || '/api', rest(sapp));

module.exports = app;
