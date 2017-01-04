quark.$._nodeMethods.animate = function(properties, options) {
	Velocity(this.node, properties, options);
	return this;
};