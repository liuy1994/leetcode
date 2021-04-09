/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length - 1
    let res = len

    for (let i=0;i<=len;) {
        for (let j=1;j<=nums[i];j++) {

        }
        i += j
    }
};
// @lc code=end

