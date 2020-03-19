/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length;
  for(let i = length - 1; i>=0;i--) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1)
      }
    }
  }
  return digits;
  
};
console.log(plusOne([1,2,3]))
// @lc code=end
