/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max = 0
    for (let len = nums.length;len>=2;len--) {
        for (let i=0;i<=nums.length-len;i++) {
            if (nums.slice(i, i+len).filter(v => v === 1).length === len/2) {
                return len
            }
        }
    }
    return max
};
// @lc code=end

// console.log(findMaxLength([0,1, 0]))