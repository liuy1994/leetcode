/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let flag = false
    for (let i=nums.length-1;i>0 && !flag;i--) {
        // for (let j=i-1;j>=0 && !flag;j--) {
        //     if (nums[j] < nums[i]) {
        //         flag = true
        //         let temp = nums[i]
        //         nums[i] = nums[j]
        //         nums[j] = temp
        //         console.log(nums)
        //         fn(nums, j)
        //     }
        // }
        if (nums[i-1] < nums[i]) {
                flag = true
                let temp = nums[i]
                nums[i] = nums[i-1]
                nums[i-1] = temp
                // console.log(nums)
                fn(nums, i-1)
        }
    }
    if (!flag) {
        nums.sort((a,b) => a-b)
    }
    // console.log(nums)
};
const fn = (nums, idx) => { 
    for(let i=idx+1;i<nums.length-1;i++) {
        for(let j=i+1;j<=nums.length-1;j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
}
// @lc code=end

// nextPermutation([4,2,0,2,3,2,0])