/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = []
    while(nums.length && index.length) {
    let num = nums.shift()
    let idx = index.shift()
    target.splice(idx, 0, num)
    }
        
    return target
};
// @lc code=end

