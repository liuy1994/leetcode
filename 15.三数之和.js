/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // if (nums.length === 3000){
    //     return 
    // }
    let res = {}
    nums.sort((a,b) => a-b)
    let len = nums.length
    for (let i=0;i<len-2;i++) {
        let k=len-1
        for (let j=i+1;j<k;j++) {
            while((nums[i]+nums[j]+nums[k]) > 0) {
                k--
            }
            if (j>=k) break
            if (nums[i]+nums[j]+nums[k] === 0) {
                let key = [nums[i],nums[j],nums[k]].join(',')
                res[key] = 1
            }
        }
    }
    return Object.keys(res).map(v => v.split(','))
};
// @lc code=end

// console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]))
// console.log(threeSum([-2,0,1,1,2]))