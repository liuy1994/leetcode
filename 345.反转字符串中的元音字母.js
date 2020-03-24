/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (49.28%)
 * Likes:    80
 * Dislikes: 0
 * Total Accepted:    28.5K
 * Total Submissions: 57.6K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('')
  for(let i=0;i<s.length;i++) {
    if (['a','e','i','o','u'].includes(s[i])) {
      for(let j=s.length-1;j > i; j--) {
        if ([s[i], s[j]].every(v => ['a','e','i','o','u'].includes(v))) {
          [s[i], s[j]] = [s[j], s[i]]
          continue
        }
        
      }
    }
    
  }
  return s.join('')
};
// @lc code=end

