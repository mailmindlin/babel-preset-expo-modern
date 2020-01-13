/**
 * Expo packages with side-effects, so they shouldn't be lazily imported
 */
const lazyImportsBlacklist = new Set([
	'expo',
	'expo-asset',
	'expo-task-manager',
]);

export default lazyImportsBlacklist;