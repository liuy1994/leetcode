/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort((a,b) => a-b)
    let arr = A.splice(0,K)
    if(K%2 ===0) {
        arr = arr.map(Math.abs)
    }
    if(arr.every(v => v >= 0)) {
        arr[0] = K%2 === 0 ? arr[0] : 0 - arr[0]
    } else {
        arr = arr.map(Math.abs)
    }
    return [...arr, ...A].reduce((a,b) => a+b,0)
};
// @lc code=end
console.log(largestSumAfterKNegations([4,2,3], 1))
