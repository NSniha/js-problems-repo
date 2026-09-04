function findFirstUniqueChar(s) {
    const frequency = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (frequency[s[i]] === 1) {
            return s[i];
        }
    }

    return -1;
}