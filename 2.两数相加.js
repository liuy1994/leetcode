/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = ''
    while(l1 || l2) {
        res = parseInt(l1.val) + parseInt(l2.val) + '-' + res
        l1 = l1.next
        l2 = l2.next
    }
    console.log(res)
};

function getNum(l) {
    let res = ''
    while(l) {
        res += l.val
        l = l.next 
    }
    return res || 0
}
// @lc code=end

