/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let flag = true
    for (let i=0;i<9;i++) {
        let a = board[i].filter(V => V !== '.')
        if (a.length !== new Set(a).size) {
            flag = false
            break
        }
        let b = board.map(v => v[i]).filter(v => v !== '.')
        if (b.length !== new Set(b).size) {
            flag = false
            break
        }
    }

    for (let i=0;i<9 && flag;i=i+3) {
        for (let j=0;j<9 && flag;j=j+3) {
            let a = [...board[i].slice(j,j+3), ...board[i+1].slice(j,j+3), ...board[i+2].slice(j,j+3)].filter(v => v !== '.')
            if (a.length !== new Set([...a]).size) {
                flag = false
                break
            }
        }
    }
    return flag

};
// @lc code=end

// console.log(isValidSudoku([
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ]))