/**
 * This method subtracts two integers
 * @param number1
 * @param number2
 * @returns {number}
 */
module.exports = function (number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    throw new Error("Invalid input");
  }
  return parseInt(number1) - parseInt(number2);
}