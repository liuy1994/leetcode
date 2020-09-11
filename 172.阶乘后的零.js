/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */


// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */


var trailingZeroes = function(n) {
    
    return fn(n)[0]

};
var fn = (n, options) => {
    options = options || [0, 0, 0]
    let sum = options[0]
    let sum2 = options[1]
    let sum5 = options[1]
    while(n >1 ) {
        if (n%10 === 0) {
            let k = n
            while(k && k%10 === 0) {
                sum++
                k=k/10
            }
            let res = fn(k, [sum, sum2, sum5])
            sum = res[0]
            sum2 = res[1]
            sum5 = res[2]
        } else if (n%2 === 0 && n%10 !== 0) {
            if (sum5) {
                sum5--
                sum++
            } else {
                sum2++
            }
        }else if (n%5===0 && n%10 !== 0) {
            if (sum2) {
                sum2--
                sum++
            } else {
                sum5++
            }
            if (n/5%5===0) {
                let res = fn(n/5, [sum, sum2, sum5])
                sum = res[0]
                sum2 = res[1]
                sum5 = res[2]
            }
        }
        n--
    }
    return [sum,sum2,sum5]
}
// @lc code=end
console.log(trailingZeroes(30))