const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }

  const m = date.getMonth();
  let season;

  switch (true) {
    case (m >= 0 && m <= 1) || m == 11:
      season = 'winter';
      break;

    case m > 1 && m <= 4:
      season = 'spring';
      break;

    case m > 4 && m <= 7:
      season = 'summer';
      break;

    case m > 7 && m <= 10:
      season = 'autumn';
      break;
  }

  return season;
}

module.exports = {
  getSeason,
};
