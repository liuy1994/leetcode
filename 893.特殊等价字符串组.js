/*
 * @lc app=leetcode.cn id=893 lang=javascript
 *
 * [893] 特殊等价字符串组
 *
 * https://leetcode-cn.com/problems/groups-of-special-equivalent-strings/description/
 *
 * algorithms
 * Easy (66.78%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    4.7K
 * Total Submissions: 7K
 * Testcase Example:  '["abcd","cdab","cbad","xyzz","zzxy","zzyx"]'
 *
 * 你将得到一个字符串数组 A。
 * 
 * 如果经过任意次数的移动，S == T，那么两个字符串 S 和 T 是特殊等价的。
 * 
 * 一次移动包括选择两个索引 i 和 j，且 i ％ 2 == j ％ 2，交换 S[j] 和 S [i]。
 * 
 * 现在规定，A 中的特殊等价字符串组是 A 的非空子集 S，这样不在 S 中的任何字符串与 S 中的任何字符串都不是特殊等价的。
 * 
 * 返回 A 中特殊等价字符串组的数量。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：["a","b","c","a","c","c"]
 * 输出：3
 * 解释：3 组 ["a","a"]，["b"]，["c","c","c"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：["aa","bb","ab","ba"]
 * 输出：4
 * 解释：4 组 ["aa"]，["bb"]，["ab"]，["ba"]
 * 
 * 
 * 示例 3：
 * 
 * 输入：["abc","acb","bac","bca","cab","cba"]
 * 输出：3
 * 解释：3 组 ["abc","cba"]，["acb","bca"]，["bac","cab"]
 * 
 * 
 * 示例 4：
 * 
 * 输入：["abcd","cdab","adcb","cbad"]
 * 输出：1
 * 解释：1 组 ["abcd","cdab","adcb","cbad"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 1000
 * 1 <= A[i].length <= 20
 * 所有 A[i] 都具有相同的长度。
 * 所有 A[i] 都只由小写字母组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var getStr = (str, i) => {
  return [...str].filter((v, index) => index%2 === i).sort().join('')
}

var numSpecialEquivGroups = (A) => {
  let res = [[A[0]]]
  for(let i=1;i<A.length;i++) {
    let a = getStr(A[i], 0)
    let b = getStr(A[i], 1)
    for(let j=0;j<res.length;j++) {
      if(a === getStr(res[j][0],0) && b === getStr(res[j][0],1)) {
        res[j].push(A[i])
        console.log(11111)
      } else {
        res.push([A[i]])
        console.log(22222)
      }
    }
  }
  console.log(res)
  return res.length;
};
console.log(numSpecialEquivGroups(['a', 'aa', 'b']))

// console.log(getStr('cdeab', 1))
// console.log(getStr('abcde', 0))
// @lc code=end

