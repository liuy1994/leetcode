/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    for (let i=0;i<nums.length;i++) {
        let temp = nums.slice(0, i).concat(nums.slice(i+1)).filter(v => v !== 1)
        if (temp.includes(0)) {
            res.push(0)
        } else {
            const lens = temp.filter(v => v === -1).length
            let r = temp.filter(v => v !== -1).reduce((a,b) => a * b, 1)
            if (lens % 2 === 1) {
                res.push(0-r)
            } else {
                res.push(r)
            }
        }
    }
    return res
};
// @lc code=end

console.log(productExceptSelf([-1,1,0,-3,3]))