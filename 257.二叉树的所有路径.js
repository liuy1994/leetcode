/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    if (root) {
        [root.left, root.right].map(v => {
            return [v.val, ...binaryTreePaths(root)]
        })
        binaryTreePaths(root)
    }
    return res
};
// @lc code=end

