const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let dreamTeam = '';
  let bufferTeam = [];
  let name = '';

  if (members == null) return false;

  for (let i = 0; i < members.length; i++) {
    if (parseFloat(members[i])) {
      continue;
    } else if (typeof members[i] == 'string') {
      name = members[i].replace(/\s+/g, '');
      bufferTeam.push(name[0].toUpperCase());
    }
  }

  bufferTeam.sort();

  for (let name of bufferTeam) {
    dreamTeam += name;
  }

  return dreamTeam;
}

module.exports = {
  createDreamTeam
};
