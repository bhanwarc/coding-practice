
// const fibonacci = (n) => {
//     let a = 0;
//     let b = 1;
//     let c  = 1;
//     for (let i = 1; i <=n; i++) {
//         console.log(c)
//         c = a + b;
//         a = b;
//         b = c;
//     }
// }

// const fibonacci = (n) => {
//     const fib = [0, 1, 1]
//     for(let i = 3; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     console.log(fib)
// }

const fibonacci = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n < 2) {
        memo[n] = n;
        return n;
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(40))