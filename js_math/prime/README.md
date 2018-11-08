## 查找范围内的素数
详解：[使用埃拉托斯特尼筛法，查找范围内素数](https://petergooo.github.io/2018/11/08/tools/primes/)

Code: 
```javascript
function primesFn(N) {
    if(N < 2) return []
    let primes = []  // 素数 数组
    let nums = []  // 数据源
    for (let i=2; i<N+1; i++) {
        nums.push(i)
    }
    
    // 循环过滤数组。 使用filter筛选
    while(nums.length) {
        let p = nums.shift()
        primes.push(p)
    
        nums = nums.filter(a => a%p !== 0)
    }
    return primes
}
```
