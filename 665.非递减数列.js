/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let idx = -1
    if (nums[0] > nums[1]) {
        idx = 0
    } else {
        for (let i=1;i<nums.length-1;i++) {
            if ((nums[i] < nums[i+1] && nums[i] < nums[i-1]) || (nums[i] > nums[i+1] && nums[i] > nums[i-1])) {
                
                
                nums.splice(i, 1)
                idx = i
                i--
            }
        }
    }
    
    // console.log([...nums].join(''))
    // console.log([...nums].sort((a,b) => a-b).join(''))
    return [...nums].join('') === [...nums].sort((a,b) => a-b).join('')
};
// @lc code=end
// console.log(checkPossibility([5,7,1,8]))
