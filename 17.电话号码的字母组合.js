/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const arr = ['', '', 'abc','def', 'ghi','jkl','mno', 'pqrs', 'tuv', 'wxyz']

let deal = (num, str = []) => {
    let lettes = arr[num].split('')
    let z = lettes.map(v => {
        if (str.length) {
            return str.map(t => t+v).join(',')
        } else {
            return v
        }
    }).toString().split(',')
    return z
}
var letterCombinations = function(digits) {

    digits = digits.toString().split('')
    let res = []
    while(digits.length) {
        res = deal(digits.shift(), res)
    }
    return res
};
// @lc code=end

// console.log(letterCombinations(23))