cubicsplines
============

Three kinds of cubic spline calculation in CoffeeScript: natural, clamped and monotonic.

Note: there may be glitches in the monotonic calculations that cause non-monotonicity on rare occasions (best I can tell, these are in the original sources, not my translation).

Demo, discussion, and compiled JS: http://blog.mackerron.com/2011/01/01/javascript-cubic-splines/

Licence: MIT

## Notes

Original code by George MacKerron https://github.com/jawj  
Typescript declarations by Claudio Schilling https://github.com/rbfowler9lfc  

As of 2021 Coffeescript is basically dead on the water, so running `npm install` will compile the source into a CommonJS module, and a Typescript declaration file is also available.

## Install
`npm install https://github.com/rbfowler9lfc/cubicsplines.git`
  
## Usage
```ts
import { MonotonicCubicSpline, CubicSpline } from "cubicsplines";

const xs = [0, 1, 2, 3, 4];
const ys = [9, 3, 6, 2, 4];

const cubic = new CubicSpline(xs, ys);
const monotonic = new MonotonicCubicSpline(xs, ys);

// Get Y at arbitrary X
console.log(cubic.interpolate(1.4));        // Outputs 4.075319916724497
console.log(monotonic.interpolate(1.4));    // Outputs 3.888
```
