const findRoot = require('find-root');
const memo = require('./memo');
const lazyImports = require('./lazy-imports');

/** @param {string} fileName */
function isTypeScriptSource(fileName) {
	return !!fileName && fileName.endsWith('.ts');
}

/** @param {string} fileName */
function isTSXSource(fileName) {
	return !!fileName && fileName.endsWith('.tsx');
}

function isTargetWeb(caller) {
	return caller && caller.name === 'babel-loader';
}

const defaultPlugins = [
	// Alias react-native-vector-icons for Expo to work
	[require('babel-plugin-module-resolver'), {
		alias: {
			'react-native-vector-icons': '@expo/vector-icons',
		},
	}],
	// Flow is needed for react-native-web
	[require('@babel/plugin-syntax-flow')],
	// Note: this ordering is important
	[require('@babel/plugin-proposal-decorators'), {
		legacy: true,
	}],
	[require('@babel/plugin-transform-flow-strip-types')],
	[require('@babel/plugin-proposal-class-properties'), {
		loose: true,
	}],

	// Support ESNext features
	[require('@babel/plugin-proposal-nullish-coalescing-operator'), {
		loose: true,
	}],
	[require('@babel/plugin-proposal-optional-chaining'), {
		loose: true,
	}],
	[require('@babel/plugin-proposal-optional-catch-binding')],
	[require('@babel/plugin-syntax-dynamic-import')],
	[require('@babel/plugin-syntax-export-default-from')],

	// JSX
	[require('@babel/plugin-transform-react-jsx')],
	[require('@babel/plugin-transform-react-jsx-source')],
];

const pluginReactNativeWeb = memo(() => [require('babel-plugin-react-native-web')]);
const pluginExportDefaultFrom = memo(() => [require('@babel/plugin-proposal-export-default-from')]);
// Note: config not memoized because it's preset-config-dependent
const pluginTransformCommonjs = memo(() => require('@babel/plugin-transform-modules-commonjs'));

const pluginTypescript = require('@babel/plugin-transform-typescript');

module.exports = function (api, options = {}) {
	const { web = {}, native = {} } = options;
	const isWeb = api.caller(isTargetWeb);
	const platformOptions = isWeb
		? { disableImportExportTransform: true, ...web }
		: { disableImportExportTransform: false, ...native };

	// Note that if `options.lazyImports` is not set (i.e., `null` or `undefined`),
	// `metro-react-native-babel-preset` will handle it.
	const disableImportExportTransform = platformOptions.disableImportExportTransform;
	const lazyImportsOption = options && options.lazyImports;

	const plugins = [...defaultPlugins];

	if (isWeb)
		plugins.push(pluginReactNativeWeb());

	if (!disableImportExportTransform) {
		plugins.push(
			pluginExportDefaultFrom(),
			[pluginTransformCommonjs(), {
				strict: false,
				strictMode: false, // prevent "use strict" injections
				lazy: (lazyImportsOption === true)
					? lazyImports.filterBlacklist
					: (lazyImportsOption == null)
						? lazyImports.filterWhitelist
						: lazyImportsOption,
				allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
			}],
		)
	}

	return {
		comments: false,
		compact: true,
		presets: [],
		overrides: [
			{
				exclude: [
					'transform-regenerator',
					'babel-runtime',
					'babel-runtime-regenerator',
				]
			},
			{
				test: isTypeScriptSource,
				plugins: [
					[pluginTypescript, {
						isTSX: false,
						parserOpts: {
							allowJs: true,
						}
					}],
				],
			},
			{
				test: isTSXSource,
				plugins: [
					[pluginTypescript, {
						isTSX: true,
					}],
				],
			},
			{
				plugins,
			}
		]
	};
};