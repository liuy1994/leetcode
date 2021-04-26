
/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    // let res = ''
    // let base = 1
    // while(res.length < n) {
    //     res = res + (base++).toString()
    // }
    // return res[n-1]
    let count = 0
    let current = 0
    while(count < n) {
        let temp = count + (current+1).toString().length
        if (temp < n) {
            count = temp
            current++
        } else {
            break
        }
    }
    let last = (current+1).toString()
    return parseInt(last[n-count-1])
};
// @lc code=end
// console.log(findNthDigit(13))