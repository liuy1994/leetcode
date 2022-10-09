/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 const map = {
    "[": "]",
    "]":"[",
    "(": ")",
    ")":"(",
    "{":"}",
    "}":"{"
}
var isValid = function(s) {
    let stack = []
    let res = true
    for (let str of s) {
        if (["{","[","("].includes(str)) {
            stack.unshift(str)
        } else {
            if (map[str] !== stack[0]) {
                res = false
                break
            } else {
                stack.shift()
            }
        }
        
    }
    return res && stack.length === 0
};
// @lc code=end
// console.log(isValid("()[]{}["))
