/** @type {Array<import('../types').BabelPluginConfig>} */
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
	
	// Support ESNext syntax
	[require('@babel/plugin-syntax-dynamic-import')],
	[require('@babel/plugin-syntax-export-default-from')],
	[require('@babel/plugin-syntax-export-namespace-from')],

	// JSX
	[require('@babel/plugin-transform-react-jsx')],
	[require('@babel/plugin-transform-react-jsx-source')],
];

/**
 * @param {import('../types').ExpoModernConfig} options
 * @param {boolean} isWeb
 * @returns {Iterable<import('../types').BabelOverride>}
 */
module.exports = function defaultPluginOverride(options, isWeb) {
	return [
		{ plugins: defaultPlugins },
	];
}