/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    // abc逆时针
    return Math.abs((1/2)*(a[0]*b[1]+b[0]*c[1]+c[0]*a[1]-a[0]*c[1]-b[0]*a[1]-c[0]*b[1]))
};
// @lc code=end
console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]))