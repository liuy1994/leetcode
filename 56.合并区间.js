/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => {
        if (a[0]>b[0]) return 1
        else if (a[0] < b[0]) return -1
        else return a[1]-b[1]
    })
    console.log(intervals)
    let res = [intervals.shift()]
    while(intervals.length) {
        let item = intervals.shift()
        let lastIndex = res.length-1
        if ((item[0] >= res[lastIndex][0] && item[0] <= res[lastIndex][1]) || (item[1] >= res[lastIndex][0] && item[1] <= res[lastIndex][1]) || (item[0] >= res[lastIndex][0] && item[1] <= res[lastIndex][1]) || (item[0] <= res[lastIndex][0] && item[1] >= res[lastIndex][1])) {
            let arr = [item[0], item[1],res[lastIndex][0], res[lastIndex][1]].sort((a,b) => a-b)
            res[lastIndex][0] = arr[0]
            res[lastIndex][1] = arr[arr.length-1]
        } else {
            res.push(item)
        }
        
    }
    return res
};
// @lc code=end

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))