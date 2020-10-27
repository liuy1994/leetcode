/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const check = (root, flag) => {
    if (root && !root.left && !root.right) {
        return flag
    } else {
        return false
    }
}
var sumOfLeftLeaves = function(root, flag = true) {
    let sum = 0
    if (!root) return 0
    if (check(root, flag)) return root.val
    sum += (check(root.left, true) ? sumOfLeftLeaves(root.left) : 0) + 
    check(root.right, false) ? sumOfLeftLeaves(root.right) : 0
    return sum
};
// @lc code=end

