/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (s.split('').reverse().join('') === s) return true
    s = s.split('')
    const len = s.length
    let flag = false
    for(let i=0;i<Math.ceil(len/2) && !flag;i++) {
        if (s[i] !== s[len-1-i]) {
            s.splice()
        }
    }
};
// @lc code=end

