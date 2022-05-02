const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  let numberOfCats = 0;

  function isCat(isIt) {
    isIt == '^^' ? numberOfCats++ : numberOfCats;
  }

  for (let i of matrix) {
    isCat(i);

    if (typeof i == 'object') {
      for (let j of i) {
        isCat(j);
      }
    }
  }

  return numberOfCats;
}

module.exports = {
  countCats
};
