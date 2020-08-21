/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if (root === null) return 0
    if (root.left === null && root.right === null) return 1
    else if (root.left === null && root.right !== null) root.left = root.right
    else if (root.left !== null && root.right === null) root.right = root.left
    return fn(root)

};
function fn(root) {
    let deep = 0;
    if (!root) {
      return deep;
    } else {
      deep++;
      deep += Math.min(fn(root.left), fn(root.right))
      return deep;
    }
  
  }

// @lc code=end

