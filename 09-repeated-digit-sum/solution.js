function repeatedDigitSum(n) {
    while (n >= 10) {
        let sum = 0;

        for (let digit of String(n)) {
            sum += Number(digit);
        }

        n = sum;
    }

    return n;
}

console.log(repeatedDigitSum(9875)); // 2
console.log(repeatedDigitSum(123));  // 6
console.log(repeatedDigitSum(9));    // 9
console.log(repeatedDigitSum(0));    // 0