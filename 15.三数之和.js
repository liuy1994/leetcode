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
    let res = []
    nums.sort((a,b) => a-b)
    
    for (let i=0;i<nums.length-2 && nums[i] <=0;i++) {
        for (let j=nums.length-1;j>1 && nums[j] >=0;j--) {
            let rest = 0-nums[i]-nums[j]
            let key = [nums[i],rest, nums[j]].sort((a,b) => a-b).join(',')
            
            let index = nums.indexOf(rest)
            let lastIndex = nums.lastIndexOf(rest)
            if ((nums[i] === nums[j])) {
                if (nums.lastIndexOf(0)-nums.indexOf(0) > 1) {
                    if (res.includes(key)) {
                        continue
                    }
                    res.push('0,0,0')
                } else {
                    continue
                }
            }
            if (res.includes(key)) {
                continue
            }
            if (index > -1) {
                if ((index !== lastIndex)) {
                    res.push(key)
                } else if (index !== i && index !== j) {
                    res.push(key)
                }
            }
        }
    }
    return res.map(v => v.split(','))
};
// @lc code=end

// console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]))
// console.log(threeSum([0,0,0,0]))