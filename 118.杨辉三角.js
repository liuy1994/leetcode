/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (65.91%)
 * Likes:    262
 * Dislikes: 0
 * Total Accepted:    62.4K
 * Total Submissions: 94.6K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(rows) {
  let res = []

  if (rows === 1) {
    res = [[1]]
  } else {
    res = [
      [1],
      [1,1]
    ]
    for(let i = 3; i<= rows;i++){
      res[i] = [
        1, 
        ...Array.from({length:n-2}, (_,k) => k),
         1]
    }
  }
  
  return res;

};
// @lc code=end

