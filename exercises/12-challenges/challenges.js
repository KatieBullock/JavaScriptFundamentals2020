/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {array} arr
 * @returns {number}
 *
 * @example findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
 * @example findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
 */
function findLongestWordLength(str) {
  let length = 0;
  let arr = str.split(" ");
  arr.forEach ((word) => {
    if (word.length > length) {
      length = word.length;
    }
  });
  return length;
  }

/**
 * Find the missing letter in the passed letter range and return it
 * @param {string} letters
 * @returns {string} returns the missing letter from the string
 * @example
 *   fearNotLetter("abce") should return "d".
 *   fearNotLetter("abcdefghjklmno") should return "i".
 *   fearNotLetter("stvwx") should return "u".
 *   fearNotLetter("bcdf") should return "e".
 *   fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 *
 */
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startingPoint = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] !== alphabet[startingPoint + i]) {
      return alphabet[startingPoint + i];
    }
  }
  return undefined;
}
module.exports = {
  findLongestWordLength,
  fearNotLetter,
};
