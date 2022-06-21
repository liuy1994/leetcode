/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let res = 0
    for (let i=0;i<s.length;i++) {
        if (s[i] === "I" && s[i+1] && s[i+1] !== "I") {
            res += map[s[i+1]] - 1
        } else {
            res += map[s[i]]
        }
    }
    return res

};
// @lc code=end

console.log(romanToInt("XII"))