# <%= moduleName %>

> My cool module

[![Build Status](https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)

## Install

```
$ npm install --save <%= moduleName %>
```

## Usage

```js
var <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('Hello');
//=> 'I am cool'
```

## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.<% if (cli) { %>


## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= moduleName %> --help

  Usage
    <%= moduleName %> [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Example
    $ <%= moduleName %>
    I am cool
```<% } %>

## License

MIT © [<%= name %>](<%= website %>)
