const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrTemp = arr.filter((it) => it != -1).sort((a, b) => a - b);

  return arr.map((it) => {
    if (it == -1) {
      return it;
    } else {
      return arrTemp.shift();
    }
  });
}

module.exports = {
  sortByHeight,
};
