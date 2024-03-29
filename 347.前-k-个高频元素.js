/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = {}
    for (let i of nums) {
        res[i] = res[i] ? (res[i] + 1) : 1
    }
    return Object.entries(res).sort((a,b) => b[1]-a[1]).slice(0, k).map(v => v[0])
};
// @lc code=end
// console.log(topKFrequent([1,1,1,2,2,3], 2))
