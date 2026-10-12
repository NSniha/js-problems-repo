function productExceptSelf(numbers) {
    const result = new Array(numbers.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < numbers.length; i++) {
        result[i] = prefix;
        prefix *= numbers[i];
    }

    let suffix = 1;

    for (let i = numbers.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= numbers[i];
    }

    return result;
}