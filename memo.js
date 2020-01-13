
const unset = Symbol();
/**
 * @template T
 * @param {() => T} callback 
 * @returns {() => T}
 */
export default function memo(callback) {
	let result = unset;
	return () => {
		if (result === unset)
			result = callback();
		return result;
	};
}