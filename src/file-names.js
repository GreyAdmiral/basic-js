const {NotImplementedError} = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
	const temp = arr;

	arr.forEach((it, ind) => {
		const coincidences = arr.slice(0, ind).filter((el) => el == it);

		if (coincidences.length) {
			let count = 0,
				newName = "";

			do {
				count++;
				newName = it + `(${count})`;
			} while (!temp.includes(newName));

			temp[ind] = it + `(${count})`;
		}
	});

	return temp;
}

module.exports = {
	renameFiles,
};
