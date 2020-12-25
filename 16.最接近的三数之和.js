/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let res = []
    let len = nums.length
    for (let i=0;i<len-2;i++) {
        let k=len-1
        for (let j=i+1;j<k;j++) {
            if(nums[i]+nums[j]+nums[k] === target) {
                return nums[i]+nums[j]+nums[k]
            } else if (nums[i]+nums[j]+nums[k] < target) {
                // console.log(i,j,k,nums[i]+nums[j]+nums[k])
                res.push(nums[i]+nums[j]+nums[k])
            } else {
                
                while(nums[i]+nums[j]+nums[k] > target && k>j) {
                    k--
                }
                if (nums[k+1] !== undefined) {
                    res.push(nums[i]+nums[j]+nums[k+1])
                    // console.log(i,j,k+1,nums[i]+nums[j]+nums[k+1])
                }
                if (j>=k) break
                res.push(nums[i]+nums[j]+nums[k])
                // console.log(i,j,k,nums[i]+nums[j]+nums[k])
            }

        }
    }
    // console.log(res)
    return res.sort((a,b) => Math.abs(a-target) - Math.abs(b-target))[0]
};
// @lc code=end

// console.log(threeSumClosest([0,1,2], 0))