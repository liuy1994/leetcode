/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    s = s.split('')
    for (let i=0;i<s.length;i++) {
        if (s.lastIndexOf(s[i]) !== i) {
            if (s.slice(i).some(v => v < s[i])) {
                s[i] = '_'
            }
        }
    }
    let res = ''

    return s
};
// @lc code=end
console.log(removeDuplicateLetters('cbacdcbc'))
