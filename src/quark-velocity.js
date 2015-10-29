/*! quark-velocity 0.1.1 (https://github.com/pyrsmk/quark-velocity) */

quark.$._nodeMethods.animate = function(properties, options) {
	Velocity(this.node, properties, options);
	return this;
};