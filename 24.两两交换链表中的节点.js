/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head
    let next = head.next
    // next.next = swapPairs(next.next)
    head.next = swapPairs(next.next)
    next.next = head


    return next
    // let pos = head
    // while(pos && pos.next) {
    //     let temp = pos.next.val
    //     pos.next.val = pos.val
    //     pos.val = temp
    //     pos = pos.next.next
    // }
    // return head
};
// @lc code=end

