/*
 * 对一个很长的名字数组，做分片更新名字请求：
 * 1. 分片里的更新是并行的，执行 changeName
 * 2. 各个分片间是串行的，执行 sleep
 * 这个函数接受三个参数，名字列表、分片数量，每次分片后的等待时间
 * 比如：
 * slicePostTask(['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh'], 2, 2000)
 * // => ['aa', 'bb']
 * waiting 2s
 * // => ['cc', 'dd']
 * waiting 2s
 * // => ['ee', 'ff']
 * waiting 2s
 * // => ['gg', 'hh']
 */

const changeName = (name) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(name), 1000)
})

const sleep = time => new Promise((resolve, reject) => {
    setTimeout(resolve, time)
})

const slicePostTask = async (names, chunkSize, time) => {
    while (names.length) {
        const current = names.splice(0, chunkSize)
        console.log('// => ' + JSON.stringify(current))
        await changeName(current)
        if (names.length) {
            console.log(`waiting ${time / 1000}s`)
            await sleep(time)
        }
    }
}
slicePostTask(['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh'], 2, 2000)