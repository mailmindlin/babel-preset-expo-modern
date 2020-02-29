function isTargetWeb(caller) {
	return caller && caller.name === 'babel-loader';
}

const platformConfigDefaults = {
	web: {
		disableImportExportTransform: true,
	},
	native: {
		disableImportExportTransform: false,
	},
};

function getPlatformOptions(options, isWeb) {
	const platformKey = isWeb ? 'web' : 'native';
	const platformOptions = {
		...platformConfigDefaults[platformKey],
		...options,
		...options[platformKey],
	};

	return platformOptions;
}

module.exports = {
	isTargetWeb,
	getPlatformOptions,
};