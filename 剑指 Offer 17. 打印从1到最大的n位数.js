/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    const max = '9'.repeat(n)
    let i=1,res=[]
    while(i<=max) {
        res.push(i)
        i++
    }
    return res
};

// console.log(printNumbers(3))