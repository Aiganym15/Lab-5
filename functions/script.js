function factorial(n) {
    if (n >= 1 && n <= 10) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    } 
}