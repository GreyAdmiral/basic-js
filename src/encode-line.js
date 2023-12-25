const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/([\p{L}])\1*/giu, (m) => {
    return m.length > 1 ? m.length + m[0] : m;
  });
}

module.exports = {
  encodeLine,
};
