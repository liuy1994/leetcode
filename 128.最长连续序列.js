/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let res = 0
    if (nums.length <= 1) return 0
    nums.sort((a,b) => a-b)
    for (let i=0;i<nums.length;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if (j === nums.length-1) {
                res = Math.max(j+1-i, res)
                break
            } else {
                if (nums[j]-nums[i] === j-i) {
                    continue
                } else {
                    res = Math.max(j-i, res)
                    break
                }
            }
            
        }
    }
    return res
};
// @lc code=end

console.log(longestConsecutive([0]))