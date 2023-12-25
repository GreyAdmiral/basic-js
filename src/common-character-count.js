const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	const isS1 = s1.length <= s2.length,
		iterator = isS1 ? s1.split("") : s2.split(""),
		arrMax = isS1 ? s2.split("") : s1.split("");
	let result = 0;

	if (!s1.length || !s2.length) return 0;

	iterator.forEach((it) => {
		const index = arrMax.indexOf(it);

		if (~index) {
			result++;
			arrMax.splice(index, 1);
		}
	});

	return result;
}

module.exports = {
	getCommonCharacterCount,
};
