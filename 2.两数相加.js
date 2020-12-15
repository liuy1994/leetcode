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
    let res = {}
    let rest = 0
    let current = res
    while(!l1 || !l2 || !rest) {
        let sum = l1.val + l1.val
        current['val'] = (sum+rest)%10
        current = current.next
        rest = Math.floor((sum+rest)/10)
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    return res
};
// @lc code=end
