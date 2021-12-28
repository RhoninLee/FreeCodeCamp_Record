function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
        // 生成质数数组
        if (primes.every(prime => i % prime !== 0)) {
            primes.push(i);
        }
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(10);
