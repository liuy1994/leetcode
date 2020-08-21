/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    console.log(n)
    let res = n.toString(2).split('').reverse().join('')
    console.log(n.toString(2), res)
    return res
};
// @lc code=end

reverseBits(00000010100101000001111010011100)