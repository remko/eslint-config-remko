#!/usr/bin/env node

"use strict";

var _ = require('lodash');
var eslintConfig = require('eslint/conf/eslint.json');
var yaml = require('js-yaml');
var fs = require('fs');
var path = require('path');
 
var theirRules = _.keys(eslintConfig.rules);
var ourRulesRaw = fs.readFileSync(path.join(__dirname, 'eslintrc'), 'utf8') + '';
var ourRules = _.keys(yaml.safeLoad(ourRulesRaw).rules);
var fail = false;
_.forEach(_.difference(theirRules, ourRules), function (rule) {
	if (ourRulesRaw.indexOf(rule + ':') < 0) {
		console.log("Missing rule: " + rule);
		fail = true;
	}
});
_.forEach(_.difference(ourRules, theirRules), function (rule) {
	console.log("Extraneous rule: " + rule);
	fail = true;
});

if (fail) {
	throw new Error("There were errors");
}
