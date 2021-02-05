/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0
    if (s.indexOf('00') > -1) return 0
    let fn = n => {
        if (n === 0) return 1
        else if (n === 1) {
            if (s.slice(0, n) <= 26) {
                if (s[n] === '0') return 1
                else return 2
            } else return 1
        } else {
            if (s.slice(n-1, n) > '26') {
                return fn(n-2)
            } else if (s[n] === '0') {
                return fn(n-2)
            } else if (s[n-1] === '0') {
                return fn(n-1)
            } else {
                return fn(n-1) + fn(n-2)
            }
        }
    }
    return fn(s.length-1)

};
// @lc code=end

console.log(numDecodings('27'))