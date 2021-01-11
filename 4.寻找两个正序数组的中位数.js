/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a,b) => a-b)
    let len = arr.length
    if (len%2 === 1) return arr[(len-1)/2]
    else return (arr[len/2-1] + arr[len/2])/2
};
// @lc code=end

// console.log(findMedianSortedArrays([1,2],[3,4]))