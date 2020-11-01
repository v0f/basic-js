const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if (typeof (sampleActivity) === 'string'
    && Number(sampleActivity) > 0
    && Number(sampleActivity) <= MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity) * (HALF_LIFE_PERIOD / Math.log(2))));
  }
  return false;
};
