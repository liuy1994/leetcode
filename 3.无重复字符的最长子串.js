/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0
    for (let i=0;i<s.length-1;i++) {
        for (let j=i+1;j<s.length;j++) {
            if (s.slice(i,j).indexOf(s[j]) === -1) {
                res = Math.max(res,j-i+1)
            }
        }
    }
    return res
};
// @lc code=end

console.log(lengthOfLongestSubstring('pwwkew'))