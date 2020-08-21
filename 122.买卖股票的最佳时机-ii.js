/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0
    if (prices.length < 2) return sum
    for(let i=0;i<prices.length-1;i++){
        if (prices[i] >= prices[i+1]) {

        } else {
            let arr = prices.slice(i+1)
            for(let j=0;j<arr.length - 1;j++) {
                if (arr[j+1] <= arr[j]) {
                    sum += arr[j] - prices[i]
                    i = j
                }
            }
        }
    }
    return sum
};
// @lc code=end

