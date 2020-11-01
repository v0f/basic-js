const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date=null) {
  if(date===null)
    return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) != '[object Date]')
    throw Error;

    let seasons = ['winter','spring','summer','autumn'];
    seasons = seasons.map(x=>`${x} `.repeat(3)).join('').trimRight().split(' ');
    seasons.push(seasons.shift());
    try {
      return seasons[date.getMonth()]
    } catch (error) {
      throw Error;
    }

};
