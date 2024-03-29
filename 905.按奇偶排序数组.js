/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (68.19%)
 * Likes:    130
 * Dislikes: 0
 * Total Accepted:    31.7K
 * Total Submissions: 46.4K
 * Testcase Example:  '[3,1,2,4]'
 *
 * 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 * 
 * 你可以返回满足此条件的任何数组作为答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[3,1,2,4]
 * 输出：[2,4,3,1]
 * 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  // for (let i=0;i<A.length;i++){
  //   for(let j=A.length -1;j>i;j--) {
  //     if (A[i]%2 === 1 && A[j]%2 === 0) {
  //       [A[i], A[j]] = [A[j], A[i]]
  //     }
  //   }
  // }
  A = A.sort((a,b) => {
    return a%2 - b%2
  })
  return A
};
// @lc code=end

