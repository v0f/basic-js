const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  return cats.flat().reduce((acc,x)=>String(x)=='^^' ? acc + 1 : acc, 0);
};
