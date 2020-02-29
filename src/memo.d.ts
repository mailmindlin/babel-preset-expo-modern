import { BabelPluginConfig } from './types';

declare function memo<T>(callback: () => BabelPlugin<T>[]): () => BabelPluginConfig<T>;
declare function memo<T>(callback: () => T): () => T;

export = memo;