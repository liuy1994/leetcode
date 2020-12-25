/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let n = dividend/divisor
    if (n.toString().indexOf('.') > -1) n = Math.floor(n >= 0 ? n : n+1)
    if (n>Math.pow(2, 31)-1) return Math.pow(2, 31)-1
    else if (n < 0-Math.pow(2, 31)) return 0-Math.pow(2, 31)
    else return n

    // if (dividend === 0) {
    //     return 0;
    // }
    // if (dividend == Math.pow(2, -31) && divisor == -1) {
    //     return Math.pow(2,31)-1;
    // }
    // let negative =(dividend ^ divisor) <0;
    // let t = dividend, d = divisor;
    // let result = 0;
    // for (let i=31; i>=0;i--) {
    //     if ((t>>i)>=d) {//找出足够大的数2^n*divisor
    //         result+=1<<i;//将结果加上2^n
    //         t-=d<<i;//将被除数减去2^n*divisor
    //     }
    // }
    // return negative ? -result : result;//符号相异取反
};
// @lc code=end

