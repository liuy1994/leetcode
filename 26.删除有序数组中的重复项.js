/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length
    for (let i = 1 ; i< nums.length;i++) {
        if (nums[i] === nums[i-1]) {
            i--
            nums.splice(i, 1)
        }
    }
    return nums.length
};
// @lc code=end
