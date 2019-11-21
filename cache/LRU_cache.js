/*
    缓存淘汰算法，
    LRU，最近最少使用的缓存淘汰掉
    最终优化，以类的方式编写，用数组这种数据结构

    默认数组的length 是 10，可以在new时传入

    getCache，根据key值返回缓存，如没有则返回null
    setCache，根据key值来存储缓存，如果已有则取消存储
    sortCache，根据position来排序，其中position值越大，说明该缓存是最新使用，越小，说明该缓存最近最少使用，可以淘汰
 */
class CacheLRU {
    CACHE_ARR = []

    constructor(len = 10) {
        this.len = len
    }

    getCache(key) {
        if (!this.CACHE_ARR.length) {
            return null
        }
        let r = null
        this.CACHE_ARR.some((c, i) => {
            if (c.key === key) {
                c.position = this.CACHE_ARR[0].position + 1
                r = c.data
                return true
            }
        })
        return r
    }

    setCache(key, data) {
        if (this.getCache(key)) {
            return 'have'
        }
        const i = this.CACHE_ARR.length
        if (i < this.len - 1) {
            this.CACHE_ARR[i] = {key: key, data: data, position: this.CACHE_ARR[0] ? this.CACHE_ARR[0].position + 1 : 0}
        } else {
            this.CACHE_ARR[this.len - 1] = {key: key, data: data, position: this.CACHE_ARR[0].position + 1}
        }
        this.sortCache()
        return data
    }

    sortCache() {
        this.CACHE_ARR.sort((a, b) => {
            return b.position - a.position
        })
    }
}

let cache = new CacheLRU(5)


/*
    这里是最开始的想法
 */
// const CACHE_ARR = [{data: 'a', position: 1}, {data: 'b', position: 0}]
// const CACHE_ARR_LENGTH = 5
//
// function getCache(v) {
//     if (!CACHE_ARR.length) {
//         setCache(v, 0)
//         return v
//     }
//     let r = null
//     CACHE_ARR.some((c, i) => {
//         if (c.data === v) {
//             c.position = CACHE_ARR[0].position + 1
//             sortCache()
//             r = c.data
//             return true
//         }
//         if (i === CACHE_ARR.length - 1) {
//             if (i < CACHE_ARR_LENGTH - 1) {
//                 setCache(v, i+1)
//             } else {
//                 setCache(v, i)
//             }
//             sortCache()
//         }
//     })
//     return r
// }
// function sortCache() {
//     CACHE_ARR.sort((a, b) => {
//         return b.position - a.position
//     })
// }
//
// function setCache(val, i) {
//     CACHE_ARR[i] = {data: val, position: CACHE_ARR[0] ? CACHE_ARR[0].position + 1 : 0}
// }
