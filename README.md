# [rkgttr-prng](https://github.com/rkgttr/rkgttr-prng)

[![NPM version](http://img.shields.io/npm/v/rkgttr-prng.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-prng)
[![NPM downloads](http://img.shields.io/npm/dm/rkgttr-prng.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-prng)
[![Build Status](http://img.shields.io/travis/rkgttr/rkgttr-prng/master.svg?style=flat-square)](https://travis-ci.org/rkgttr/rkgttr-prng)
[![Coverage Status](https://img.shields.io/coveralls/rkgttr/rkgttr-prng.svg?style=flat-square)](https://coveralls.io/rkgttr/rkgttr-prng)
[![Dependency Status](http://img.shields.io/david/rkgttr/rkgttr-prng.svg?style=flat-square)](https://david-dm.org/rkgttr/rkgttr-prng)

> Small and fast pseudo random number generator.

### How to Install

```sh
$ npm install rkgttr-prng --save-dev
```
or

```sh
$ yarn add rkgttr-prng --dev
```

### Getting Started

```js
var Prng = require('rkgttr-prng');

var prng = new Prng();
prng.gen();
```
or

```js
import Prng from 'rkgttr-prng';

let prng = new Prng();
prng.gen();
```
When creating a PRNG instance, you can pass a seed to it:

```js
let prng = new Prng(12);
```

### License

MIT © 2016 Erik Guittiere
