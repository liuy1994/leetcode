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
    for (let i = 0; i< height.length - 1;i++) {
        let base = null
        for (let j = height.length - 1;j>i;j--) {
            if (base) {
                console.log(`arr: ${height.slice(i+1, j+1).toString()}`)
                if (Math.max(...height.slice(i+1, j)) < height[base]) {
                    break
                }
                if (height[j] <= height[base]) {
                    continue
                }
            }
            
            console.log(height[i], height[j])
            const current = (j - i) * Math.min(height[i], height[j])
            if (current > res) {
                res = current
                base = j
            }
            console.log(`res: ${res}, base: ${height[base]}`)
        }
    }
    // console.log(res)
    return res
};
// @lc code=end

console.log(maxArea([1,1000,1000,6,2,5,4,8,3,7]))