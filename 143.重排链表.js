/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head, fast = head
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let left = head, right = slow.next
    slow.next = null

    console.log(left, right)
    let pre = head, sec = right
    while(pre) {
        pre.next = sec
        sec = sec.next       
    }
};
// @lc code=end

