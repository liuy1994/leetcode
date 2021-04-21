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
 var maxDepth = function(root) {
    const fn = (node, deep = 1) => {
        if (!node) {
            return deep
        }
        if (!node.left && !node.right) {
            return deep
        }
        return Math.max(fn(node.left, deep+1), fn(node.right, deep+1))
    }
    if (!root) {
        return 0
    }
    return fn(root)
};