const pluginTypescript = require('@babel/plugin-transform-typescript');

/** @param {string} fileName */
function isTypeScriptSource(fileName) {
	return !!fileName && fileName.endsWith('.ts');
}

/** @param {string} fileName */
function isTSXSource(fileName) {
	return !!fileName && fileName.endsWith('.tsx');
}

const typescriptOptions = {
	allowNamespaces: true,
	parserOpts: {
		
	},
};

/**
 * @param {import('../types').ExpoModernConfig} options
 * @param {boolean} isWeb
 * @returns {Iterable<import('../types').BabelOverride>}
 */
module.exports = function typescriptOverrides(options, isWeb) {
	return [
		{
			test: isTypeScriptSource,
			plugins: [
				[pluginTypescript, {
					...typescriptOptions,
					isTSX: false,
					parserOpts: {
						...typescriptOptions.parserOpts,
						allowJs: true,
					}
				}],
			],
		},
		{
			test: isTSXSource,
			plugins: [
				[pluginTypescript, {
					...typescriptOptions,
					isTSX: true,
				}],
			],
		},
	];
};