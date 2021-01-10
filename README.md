Notes
=====

Original code by George MacKerron https://github.com/jawj
Typescript declarations by Claudio Schilling https://github.com/rbfowler9lfc

As of 2021, Coffeescript is basically dead on the water. Running `npm install https://github.com/rbfowler9lfc/cubicsplines.git` will compile the source into JS, and I've added a Typescript declaration file, so you'll be able to import it in your code like
```ts
import { MonotonicCubicSpline, CubicSpline } from "cubicsplines"
``` 

cubicsplines
============

Three kinds of cubic spline calculation in CoffeeScript: natural, clamped and monotonic.

Note: there may be glitches in the monotonic calculations that cause non-monotonicity on rare occasions (best I can tell, these are in the original sources, not my translation).

Demo, discussion, and compiled JS: http://blog.mackerron.com/2011/01/01/javascript-cubic-splines/

Licence: MIT
