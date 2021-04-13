/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let len = s.length
    let res = []
    for (let i=1;i<=len;i++) {
        for (let j=0;j<=len - i;j++) {
            let current = s.slice(j, j+i)
            let flag = true
            let base = 0
            while(base <= i/2) {
                if (current[base] !== current[current.length-base-1]) {
                    flag = false
                }
                base++
            }
            if (flag) {
                res.push(current)
            }
        }
    }
    return res
};
// @lc code=end

console.log(partition('aab'))