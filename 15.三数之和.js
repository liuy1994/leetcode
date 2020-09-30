/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let res = []
    let a = []
    let b = []
    let c = []
    nums.forEach(v => {
        if (v === 0) b.push(v)
        if (v > 0) c.push(v)
        if (v < 0) a.push(v)
    })
    if (!a.length && b.length >= 3 && !c.length) res.push([0,0,0])
    if (b.length) {
        [...new Set(a)].forEach(v => {
            if (c.includes(Math.abs(v))) {
                res.push([v, 0, Math.abs(v)])
            }
        })
    }

    let aObj = {}
    let cObj ={}

    for (let i=0;i<a.length-1;i++) {
        for (let j=i+1;j<a.length;j++) {
            aObj[`${a[i]}/${a[j]}`] = a[i] + a[j]
        }
    }
    for (let i=0;i<c.length-1;i++) {
        for (let j=i+1;j<c.length;j++) {
            cObj[`${c[i]}/${c[j]}`] = c[i] + c[j]
        }
    }
    console.log(aObj, cObj)
    for (let key in aObj) {
        if (c.includes(Math.abs(aObj[key]))) {
            res.push([parseInt(key.split('/')[0]) , parseInt(key.split('/')[1]), Math.abs(aObj[key])])
        }
    }
    for (let key in cObj) {
        if (a.includes(0 - aObj[key])) {
            res.push([parseInt(key.split('/')[0]) , parseInt(key.split('/')[1]), 0 - aObj[key]])
        }
    }
    return res
};
// @lc code=end

console.log(threeSum([1,1,-2]))
