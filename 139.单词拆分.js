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
    wordDict.sort((a,b) => a.length - b.length)
    while (s.length) {
        var flag = false;
        for (var i = 0; i < wordDict.length; i++) {
            var len = wordDict[i].length;
            if (s.slice(0, len) === wordDict[i]) {
                s = s.slice(len);
                flag = true;
            }
        }
        if (!flag) {
            return false;
        }
    }
    return true;
}
;
// @lc code=end
// console.log(wordBreak('cars', ["car","ca","rs"]));