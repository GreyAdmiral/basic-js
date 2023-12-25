const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = `${n}`.split(''),
    resArr = [];

  arr.forEach((it, ind, arr) => {
    const tempArr = [...arr];

    tempArr.splice(ind, 1);
    resArr[ind] = +[...tempArr].join('');
  });

  const res = Math.max(...resArr);

  return res;
}

module.exports = {
  deleteDigit,
};
