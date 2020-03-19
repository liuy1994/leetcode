/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.20%)
 * Likes:    316
 * Dislikes: 0
 * Total Accepted:    66.2K
 * Total Submissions: 126.9K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = '';
  let length = a.length > b.length ? a.length : b.length;
  a = a.padStart(length, '0');
  b = b.padStart(length, '0');
  for (let i =0; i < length; i++) {
    res += (parseInt(a[i] || 0, 10) + parseInt(b[i] || 0, 10)).toString();
  }
  res = res.split('').map(v => parseInt(v, 10))
  console.log(res)
  let first = 0;
  for(let i = res.length -1; i> -1;i--) {
    while(res[i] >= 2) {
      res[i] -= 2;
      if (i === 0) {
        first += 1;
      } else {
        res[i-1] += 1;
      }
    }
    // console.log(res)
  }
  return (first ? [first, ...res] : res).join('') 
};
// addBinary('1010','1011')
console.log(addBinary('0','0'))
// @lc code=end

