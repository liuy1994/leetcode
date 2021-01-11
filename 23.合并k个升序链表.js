/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let r = new ListNode()
    let pos = r
    let list = lists.toString().split(',')
    console.log(list)
    while(list.length) {
        pos.next = new ListNode(list.shift())
        pos = pos.next
    }

    return r.next
};
// @lc code=end

