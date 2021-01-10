/* eslint-disable max-classes-per-file */
declare namespace CubicSplineModule
{
    class MonotonicCubicSpline
    {
        constructor(x : number[], y : number[]);
        public interpolate(x : number) : number;
    }

    class CubicSpline
    {
        constructor(x : number[], a : number[], d0 : number, dn : number);
        public interpolate(x : number) : number;
        public derivative() : CubicSpline;
    }
}

export = CubicSplineModule;
