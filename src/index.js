const { isTargetWeb, getPlatformOptions } = require('./config');
const overrideProviders = require('./overrides');

module.exports = function (api, options = {}) {
	const isWeb = api.caller(isTargetWeb);
	const platformOptions = getPlatformOptions(options, isWeb);

	const overrides = overrideProviders
		.flatMap(override => [ ...override(platformOptions, isWeb) ]);

	return {
		comments: false,
		compact: true,
		presets: [],
		overrides,
	};
};