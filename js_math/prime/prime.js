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
