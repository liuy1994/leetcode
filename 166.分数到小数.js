/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    const a = numerator / denominator
    a = a.toString().splice('.')
    if (a[1].length > 10) {

    } else {
        return a.join('.')
    }
};
// @lc code=end

console.log(4/33, '012012012012012012'.length)