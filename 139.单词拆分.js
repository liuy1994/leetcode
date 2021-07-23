/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 function wordBreak(s, wordDict) {
     if (s === "") return true
     let temp = s
    for (let str of wordDict) {
        let len = str.length
        if (s.slice(0, len) === str) {
            s = s.slice(len)
            break 
        }
    }
    if (temp === s) {
        return false
    } else {
        return wordBreak(s, wordDict)
    }
}
;
// @lc code=end
console.log(wordBreak('cars', ["car","ca","rs"]));
// console.log(wordBreak('applepenapple', ["apple", "pen"]));
// console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa"]));