/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let len = nums4.length
    let res = 0
    for (let a=0;a<len;a++) {
        for (let b=0;b<len;b++) {
            for (let c=0;c<len;c++) {
                for (let d=0;d<len;d++) {
                    if (nums1[a] + nums2[b] + nums3[c] + nums4[d] === 0) {
                        res++
                    }
                }
            }
        }
    }
    return res
};
// @lc code=end

