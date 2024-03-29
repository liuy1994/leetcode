/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
        let arr = []
        let flag = -1
        while(head && flag === -1) {
            if (arr.includes(head)) {
                flag = arr.indexOf(head)
            } else {
                arr.push(head)
                head = head.next
            }

        }
        return arr[flag] || null
};
// @lc code=end

