#!/usr/bin/env node
'use strict'

let meow = require('meow')
let <%= camelModuleName %> = require('./')

let cli = meow([
  'Usage',
  '  $ <%= moduleName %> [input]',
  '',
  'Options',
  '  --foo  Lorem ipsum. [Default: false]',
  '',
  'Example',
  '  $ <%= moduleName %>',
  '  I am cool'
])

console.log(<%= camelModuleName %>(cli.input[0] || 'Hello'))
