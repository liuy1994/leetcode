/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    let deal = (str, l, r) => {
        if (l > n || r > n) {
            return 
        }
        if (l === n && r === n) {
            res.push(str)
        }
        if (l>=r) {
            deal(str+'(', l+1,r)
            deal(str+')',l,r+1)
        }
    }
    deal('',0,0)
    return res
};
// @lc code=end

// console.log(generateParenthesis(3))