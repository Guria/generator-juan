#!/usr/bin/env node
'use strict';
var meow = require('meow');
var <%= camelModuleName %> = require('../');

var cli = meow([
	'Usage',
	'  $ <%= moduleName %> [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ <%= moduleName %>',
	'  I am cool',
]);

console.log(<%= camelModuleName %>(cli.input[0] || 'Hello'));