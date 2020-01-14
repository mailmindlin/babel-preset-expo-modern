
const unset = Symbol();
/**
 * @template T
 * @param {() => T} callback 
 * @returns {() => T}
 */
module.exports = function memo(callback) {
	let result = unset;
	return () => {
		if (result === unset)
			result = callback();
		return result;
	};
}