interface BabelPlugin<T = unknown> {
	__babel_config: T;
}

declare module '@babel/plugin-proposal-class-properties' {
	const BabelPlugin:BabelPlugin<{ loose: boolean }>;
	export = BabelPlugin;
}

declare module '@babel/plugin-proposal-decorators' {
	const BabelPlugin:BabelPlugin<{ legacy: boolean }>;
	export = BabelPlugin;
}

declare module '@babel/plugin-proposal-export-default-from' {
	const PluginExportDefaultFrom:BabelPlugin<never>;
	export = PluginExportDefaultFrom;
}

declare module '@babel/plugin-proposal-export-namespace-from' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-proposal-nullish-coalescing-operator' {
	const BabelPlugin:BabelPlugin<{ loose: boolean }>;
	export = BabelPlugin;
}

declare module '@babel/plugin-proposal-optional-chaining' {
	const BabelPlugin:BabelPlugin<{ loose: boolean }>;
	export = BabelPlugin;
}

declare module '@babel/plugin-proposal-optional-catch-binding' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-syntax-dynamic-import' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-syntax-export-default-from' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-syntax-export-namespace-from' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-syntax-flow' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-transform-flow-strip-types' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-transform-modules-commonjs' {
	const BabelPlugin:BabelPlugin<{
		strict: boolean;
		strictMode: boolean;
		lazy: (module: string) => boolean;
		allowTopLevelThis: boolean;
	}>;
	export = BabelPlugin;
}

declare module '@babel/plugin-transform-react-jsx' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-transform-react-jsx-source' {
	const BabelPlugin:BabelPlugin<never>;
	export = BabelPlugin;
}

declare module '@babel/plugin-transform-typescript' {
	const BabelPlugin:BabelPlugin<{
		isTSX: boolean;
		allowNamespaces: boolean;
		parserOpts: object;
	}>;
	export = BabelPlugin;
}

declare module 'babel-plugin-module-resolver' {
	const BabelPlugin:BabelPlugin<{
		alias: {
			[module: string]: undefined | string | string[];
		};
	}>;
	export = BabelPlugin;
}

declare module 'babel-plugin-react-native-web' {
	const PluginReactNativeWeb: BabelPlugin<never>;
	export = PluginReactNativeWeb;
}