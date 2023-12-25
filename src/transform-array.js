const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const temp = [...array],
    controls = [
      '--discard-next',
      '--discard-prev',
      '--double-next',
      '--double-prev',
    ],
    arrControlls = temp.filter((it) => controls.includes(it));

  arrControlls.forEach((it) => {
    const index = temp.indexOf(it);

    if (~index) {
      switch (it) {
        case '--discard-next':
          if (temp[index + 1]) {
            temp.splice(index + 1, 1);
          }
          break;
        case '--discard-prev':
          if (temp[index - 1]) {
            temp.splice(index - 1, 1);
          }
          break;
        case '--double-next':
          if (temp[index + 1]) {
            temp.splice(index + 1, 0, temp[index + 1]);
          }
          break;
        case '--double-prev':
          if (temp[index - 1]) {
            temp.splice(index - 1, 0, temp[index - 1]);
          }
          break;
      }

      if (controls.includes(temp[temp.indexOf(it) + 1])) {
        temp.splice(temp.indexOf(it) + 1, 1);
      }

      temp.splice(temp.indexOf(it), 1);
    }
  });

  return temp;
}

module.exports = {
  transform,
};
