const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = 0;

  sumOfDigits(n);

  return res;

  function sumOfDigits(n) {
    const str = `${n}`;

    if (str.length == 1) res = n;

    res = +str.split('').reduce((acc, it) => {
      acc += +it;
      return acc;
    }, 0);

    if (`${res}`.length > 1) sumOfDigits(res);
  }
}

module.exports = {
  getSumOfDigits,
};
