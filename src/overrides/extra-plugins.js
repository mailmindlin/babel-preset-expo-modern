const memo = require('../memo');
const lazyImports = require('../lazy-imports');

const pluginReactNativeWeb = memo(() => [require('babel-plugin-react-native-web')]);
const pluginExportDefaultFrom = memo(() => [require('@babel/plugin-proposal-export-default-from')]);
const pluginExportNamespaceFrom = memo(() => [require('@babel/plugin-proposal-export-namespace-from')]);

// Note: config not memoized because it's preset-config-dependent
const pluginTransformCommonjs = memo(() => require('@babel/plugin-transform-modules-commonjs'));

/**
 * 
 * @param {import('../types').ExpoModernConfig} options 
 * @param {boolean} isWeb 
 * @returns {Generator<import('../types').BabelPluginConfig<any>>}
 */
function *getExtraPlugins(options, isWeb) {
	const {
		disableImportExportTransform,
		lazyImports: lazyImportsOption,
	} = options;

	// Convert 'react-native' => 'react-native-web'
	if (isWeb)
		yield pluginReactNativeWeb();

	// Note that if `options.lazyImports` is not set (i.e., `null` or `undefined`),
	// `metro-react-native-babel-preset` will handle it.
	if (!disableImportExportTransform) {
		yield pluginExportDefaultFrom();
		yield pluginExportNamespaceFrom();

		const lazy =
			(lazyImportsOption === true) ? lazyImports.filterBlacklist :
			(lazyImportsOption == null) ? lazyImports.filterWhitelist :
				lazyImportsOption;
		yield [pluginTransformCommonjs(), {
			strict: false,
			strictMode: false, // prevent "use strict" injections
			lazy,
			allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
		}];
	}
}

/**
 * @param {import('../types').ExpoModernConfig} options
 * @param {boolean} isWeb
 * @returns {Iterable<import('../types').BabelOverride>}
 */
module.exports = function extraPluginsOverride(options, isWeb) {
	const plugins = [...getExtraPlugins(options, isWeb)];
	if (plugins.length === 0)
		return [];
	
	return [
		{ plugins },
	];
}