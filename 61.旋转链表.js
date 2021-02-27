/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let p = head
    if (!head) return head
    let len = 1
    while(head.next) {
        head = head.next
        len++
    }
    head.next = p
    while(len-k>0) {
        p = p.next
        k++
    }
    let q = p
    while(len) {
        p = p.next
        q.next = p.next
        len--
    }
    console.log(q.val, q.next.val, q.next.next.val)
    p.next = null
    return q
};
// @lc code=end

