/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const fn = (node, temp, isLeft) => {
        console.log(node, temp, isLeft)
        if (node === null) {
            return true
        }

        if (node.left) {
            if (node.left.val >= node.val) {
                return false
            }
            if (temp.length) {
                if (isLeft && temp.some(v => v <= node.left.val)) {
                    return false
                }
                if (!isLeft && temp.some(v => v >= node.left.val)) {
                    return false
                }
            }
        }

        if (node.right) {
            if (node.right.val <= node.val) {
                return false
            }
            if (temp.length) {
                if (isLeft && temp.some(v => v <= node.right.val)) {
                    return false
                }
                if (!isLeft && temp.some(v => v >= node.right.val)) {
                    return false
                }
            }
        }

        return fn(node.left, temp.concat(node.val), true) && fn(node.right, temp.concat(node.val), false)
    }

    return fn(root, [])
};
// @lc code=end

