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
     const aSet = new Set(s)
     const bSet = new Set(wordDict.join(''))
     if ([...aSet].some(v => ![...bSet].includes(v))) {
         return false
     }
    if (s.length === 0) return true
    return wordDict.some(v => {
        const len = v.length
        if (s.slice(0, len) === v) {
            return wordBreak(s.slice(len), wordDict)
        } else {
            return false
        }
    })
}
;
// @lc code=end
// console.log(wordBreak('cars', ["car","ca","rs"]));
// console.log(wordBreak('applepenapple', ["apple", "pen"]));
// console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa"]));