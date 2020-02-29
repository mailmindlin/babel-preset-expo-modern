
export interface ExpoModernConfig {
	disableImportExportTransform: boolean;
	disableFlowStripTypesTransform?: boolean;
	lazyImports: true | undefined | null | ((specifier: string) => boolean);
}

type BabelPlugin<T = unknown> = { __babel_config: T };

export type BabelPluginConfig<T = unknown> =
	| BabelPlugin<T>
	| [BabelPlugin<T>, T?, string?];

export interface BabelOverride {
	test?(filename: string): boolean;
	exclude?: string[];
	plugins?: BabelPluginConfig[];
}

export type OverrideProvider = (config: ExpoModernConfig, isWeb: boolean) => Iterable<BabelOverride>;