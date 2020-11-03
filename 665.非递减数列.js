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
    let base = 0
    let len = nums.length
    if (len <=2 ) return true
    else if (nums[0] > nums[1]) base = 0
    else if (nums[len-1] < nums[len-2]) base = len-1
    else {
        for(let i=1;i<len-1;i++) {
            if ((nums[i] < nums[i-1] && nums[i] < nums[i+1])) {
                base = i
            }
        }
    }
    console.log(base)
    nums.splice(base, 1)
    let arr = [...nums]
    arr.sort((a,b) => a-b)
    return nums.join(',') === arr.join(',')

};
// @lc code=end
console.log(checkPossibility([5,7,1,8]))
