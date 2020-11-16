/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let arr = [...nums].sort((a,b) => a-b)

    return arr

};
// @lc code=end
console.log(checkPossibility([5,7,1,8]))
