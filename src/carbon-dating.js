import {NotImplementedError} from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  const reactionSpeed = 0.693 / HALF_LIFE_PERIOD;
  let age;

  if (+sampleActivity <= 0 || +sampleActivity > 15 || isNaN(sampleActivity)) {
    return false;
  } else if (typeof sampleActivity == 'string') {
    age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / reactionSpeed);
  } else {
    return false;
  }

  return age;
}
