#!/usr/bin/env babel-node

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
 
const doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'eslintrc'), 'utf8'));
fs.writeFileSync(
		path.join(__dirname, 'index.js'), 
		`module.exports = ${JSON.stringify(doc, undefined, '\t')};\n`);
