#!/usr/bin/env node

"use strict";

var yaml = require('js-yaml');
var fs = require('fs');
var path = require('path');
 
var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'eslintrc'), 'utf8'));
fs.writeFileSync(
	path.join(__dirname, 'index.js'), 
	'module.exports = ' + JSON.stringify(doc, undefined, '\t') + ';\n');
