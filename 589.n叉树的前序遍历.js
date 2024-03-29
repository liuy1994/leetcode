/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let arr = []
    if (!root) return []
    var fn = node => {
        if (node) {
            arr.push(node.val);
            (node.children || []).forEach(v => fn(v))
        }

    }
    fn(root)
    return arr
};
// @lc code=end

