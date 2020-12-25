/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = {}
    nums.sort((a,b) => a-b)
    let len = nums.length
    for (let i=0;i<len-3;i++) {
        for (let j=i+1;j<len-2;j++) {
            let z=len-1
            for (let k = j+1;k<z;k++) {
                let key = [nums[i],nums[j],nums[k],nums[z]].join(',')
                if (nums[i] + nums[j] + nums[k] + nums[z] < target) {
                }
                while((nums[i]+nums[j]+nums[k]+nums[z]) > target && k<z) {
                    z--
                }
                if (k>=z) break

                key = [nums[i],nums[j],nums[k],nums[z]].join(',')
                if (nums[i] + nums[j] + nums[k] + nums[z] === target) {
                    res[key] = 1
                }
            }
        }
    }
    return Object.keys(res).map(v => v.split(','))
};
// @lc code=end

// console.log(fourSum([-2,-1,0,0,1,2], 0))