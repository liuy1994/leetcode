/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let arr = []
    arr = nums.slice(1)
    if (arr.sort((a,b) => a-b).toString() === nums.slice(1).toString()) {
        return true
    }
    arr = nums.slice(0, -1)
    if (arr.sort((a,b) => a-b).toString() === nums.slice(0, -1).toString()) {
        return true
    }
    arr = [...nums]
    let count = 0
    for (let i=0;i<arr.length-1;i++) {
        console.log(arr[i+1], arr[i], arr[i+1] < arr[i])
        if (arr[i+1] < arr[i]) {
            count++
            if (i>0) {
                arr[i] = arr[i-1]
            } else {
                arr[i+1] = arr[i]
            }
        }
    }
    console.log(arr)
    return count <= 1

};
// @lc code=end
console.log(checkPossibility([3,4,2,3]))
