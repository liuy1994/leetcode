/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (64.49%)
 * Likes:    201
 * Dislikes: 0
 * Total Accepted:    46.7K
 * Total Submissions: 72.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = []
  if (root) {
    res.unshift([root.val])
    res.unshift(...fn(root.left, root.right))
  }
  return res
};

function fn (l, r) {
  let res = []
  if (!l && !r) {
    return []
  }
  let leaf = []
  if (l) {
    leaf.push(l.val)
  }
  if (r) {
    leaf.push(r.val)
  }
  res.unshift(leaf)
  console.log(r)
  res.unshift(...fn(l && l.left).concat(fn(l && l.right)).concat(fn(r && r.left).concat(fn(r && r.right))))
  return res
  
}
// @lc code=end

