const memo = require('../memo');

const pluginFlowStripTypes = memo(() => require('@babel/plugin-transform-flow-strip-types'));

/**
 * @param {import('../types').ExpoModernConfig} options
 * @param {boolean} isWeb
 * @returns {Iterable<import('../types').BabelOverride>}
 */
module.exports = function flowStripTypesOverride(options, isWeb) {
	const { disableFlowStripTypesTransform } = options;
	if (disableFlowStripTypesTransform)
		return [];
	
	return [
		{
			plugins: [
				pluginFlowStripTypes(),
			],
		},
	];
}