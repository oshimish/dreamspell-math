# dreamspell-math

A JavaScript library with DreamSpell date, Zolkin & extras calculations.

Details: [Law of Time](http://www.lawoftime.org/lawoftime.html)

[![npm version](https://badge.fury.io/js/%40oshimishi%2Fdreamspell-math.svg)](https://www.npmjs.com/package/@oshimishi/dreamspell-math)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Notice

The previous version of the package, `dreamspell-math` [![npm version](https://badge.fury.io/js/dreamspell-math.svg)](https://www.npmjs.com/package/dreamspell-math), is now obsolete and no longer maintained.

Please switch to using `@oshimishi/dreamspell-math` to ensure you have the latest updates, improvements, and bug fixes. 

## Installation

You can install the new version of the package from npm using the following command:

```bash
npm install @oshimishi/dreamspell-math
```

## Usage

### In Node.js (CommonJS)

```js
const { dreamdate } = require('@oshimishi/dreamspell-math');

// anything that can be parsed to moment() can be used as input
// See https://momentjs.com/docs/#/parsing/ for details

const date = dreamdate([2018, 06, 26]);
const date2 = dreamdate(new Date(1985, 7 - 1, 23));
const date3 = dreamdate(moment('1985-07-23'));

var kin = date.kin;
```

### In TypeScript (ESM)

First, you need to import the module:

```ts
import * as g from '@oshimishi/dreamspell-math';
```

Then you can use it in the same way:

```ts
const date = g.dreamdate([2018, 06, 26]);
```

## Examples

```js
const { kin } = require('@oshimishi/dreamspell-math');

const kin1 = kin(1);
const tone1 = kin1.tone;
const sign1 = kin1.sign
```

```ts
import * as g from '@oshimishi/dreamspell-math';

const kin260 = g.kin(g.tone(13), g.sign(20));
```

## Reporting Bugs

Please report bugs on our Github repository.

<https://github.com/oshimish/dreamspell-math/issues>

## License

MIT
