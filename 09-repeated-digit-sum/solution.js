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
