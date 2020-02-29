const pluginBlacklist = [
	'transform-regenerator',
	'babel-runtime',
	'babel-runtime-regenerator',
];

/**
 * @param {import('../types').ExpoModernConfig} options
 * @param {boolean} isWeb
 * @returns {Iterable<import('../types').BabelOverride>}
 */
module.exports = function blacklistTransformOverride(options, isWeb) {
	return [
		{ exclude: pluginBlacklist },
	];
}