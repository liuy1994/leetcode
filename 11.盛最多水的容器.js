/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    for (let i=0;i<height.length-1;i++) {
        for (let j=i+1;j<height.length;j++) {
            let r = (j-i)*Math.min(height[i],height[j])
            res = r > res ? r : res
        }
    }
    return res
};
// @lc code=end

// console.log(maxArea([1]))