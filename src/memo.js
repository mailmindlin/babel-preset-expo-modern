
const unset = Symbol();
/**
 * @template T
 * @param {() => T} callback
 */
module.exports = function memo(callback) {
	/** @type {symbol | T} */
	let result = unset;
	return () => {
		if (result === unset)
			result = callback();
		return result;
	};
}