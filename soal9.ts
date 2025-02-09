function climbStairs(n: number): number {
    if (n <= 2) return n;

    const dp: number[] = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Test cases
console.log(climbStairs(8));  // Output: 34
console.log(climbStairs(2));  // Output: 2
console.log(climbStairs(3));  // Output: 3
console.log(climbStairs(5));  // Output: 8
