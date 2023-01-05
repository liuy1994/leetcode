/*
 * @lc app=leetcode.cn id=1779 lang=typescript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let obj: any = {}
    for (let i = 0; i < points.length;i++) {
        if (x === points[i][0] || y === points[i][1]) {
            obj[i] = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
        }
    }

    const entries: any = Object.entries(obj).sort((a: any, b: any) => a[1] - b[1])
    return entries.length ? entries[0][0] : -1
};
// @lc code=end

// nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])