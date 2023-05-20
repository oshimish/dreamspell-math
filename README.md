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

var kin = date.kin;
```

```js
const { kin } = require('dreamspell-math');

const kin1 = kin(1);
const tone1 = kin1.tone;
const sign1 = kin1.sign
```

```js
const * as g = require('dreamspell-math');

const kin260 = g.kin(g.tone(13), g.sign(20));
```
