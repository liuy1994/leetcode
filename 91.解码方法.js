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
    let res = 0
    s = s.split('').reverse().join('')
    if (s[0] === '0') return 0
    var fn = n => {
        if (s.slice(n,1) === '0')
    }


    
    return res
};
// @lc code=end

// console.log(numDecodings('226'))