function longestConsecutive(numbers) {
    const numberSet = new Set(numbers);

    let longest = 0;

    for (const number of numberSet) {
        if (!numberSet.has(number - 1)) {
            let currentNumber = number;
            let currentLength = 1;

            while (numberSet.has(currentNumber + 1)) {
                currentNumber++;
                currentLength++;
            }

            longest = Math.max(longest, currentLength);
        }
    }

    return longest;
}