/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let res = []
    if (head === null) {
        return true
    } else {
        while(head) {
            res.push(head.val)
            head = head.next
        }
    }
    return res.join('') === res.reverse().join('')
};
// @lc code=end

