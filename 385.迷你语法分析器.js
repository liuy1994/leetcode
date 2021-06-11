/*
 * @lc app=leetcode.cn id=385 lang=javascript
 *
 * [385] 迷你语法分析器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    let res = new NestedInteger()
    // if (s) {
    //     if (s.indexOf(',') === -1) {
    //         if (s.indexOf('[') === -1) {
    //             res.setInteger(s)
    //         } else {
    //             res.setInteger(s.slice(1, -1))
    //         }
    //     } else {
    //         let index = s.indexOf(',')
    //         res.setInteger(s.slice(1, index))
    //         s = s.slice(index+1, -1)
    //         let temp = deserialize(s)
    //         if (temp) {
    //             res.add(temp)
    //         }
    //     }
    // }
    if (s[0] === '[') {
        s = s.slice(1, -1)
    }
    let index = s.indexOf(',')
    if (index === -1) {
        res.setInteger(s)
    } else {
        res.setInteger(s.slice(0, index))
        let temp = deserialize(s.slice(index+1,-1))
        temp && res.add(temp)
    }
    return res

};

// console.log(deserialize('324'))
// @lc code=end

