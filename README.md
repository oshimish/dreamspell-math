[![Build Status](https://travis-ci.org/oshimish/dreamspell-math.svg?branch=master)](https://travis-ci.org/oshimish/dreamspell-math)
[![Coverage Status](https://coveralls.io/repos/github/oshimish/dreamspell-math/badge.svg?branch=master)](https://coveralls.io/github/oshimish/dreamspell-math?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# dreamspell-math

A JavaScript library with DreamSpell date, Zolkin & extras calculations. 

Details: http://www.lawoftime.org/lawoftime.html

## Installing
For the latest stable version:

```
npm install --save dreamspell-math
```

## Usage

```js
const { dreamdate } = require('dreamspell-math');

// anything that can be parsed to moment() can be used as input
// See https://momentjs.com/docs/#/parsing/ for details

const date = dreamdate([2018, 06, 26]);
// const date = dreamdate(new Date(1985, 7 - 1, 23));
// const date = dreamdate(moment('1985-07-23'));

var kin = date.Kin;
```

```js
const kin = require('dreamspell-math').kin;

const kin1 = kin(1);
```

```js
const { kin, sign, tone } = require('dreamspell-math');

const kin260 = kin(tone(13), sign(20));
```
