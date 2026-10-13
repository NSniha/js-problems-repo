function minWindow(s, t) {
    if (t.length > s.length) {
        return "";
    }

    const required = new Map();

    for (const char of t) {
        required.set(char, (required.get(char) || 0) + 1);
    }

    const window = new Map();

    let left = 0;
    let formed = 0;
    const needed = required.size;

    let minLength = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        window.set(char, (window.get(char) || 0) + 1);

        if (
            required.has(char) &&
            window.get(char) === required.get(char)
        ) {
            formed++;
        }

        while (formed === needed) {
            const currentLength = right - left + 1;

            if (currentLength < minLength) {
                minLength = currentLength;
                minStart = left;
            }

            const leftChar = s[left];

            window.set(
                leftChar,
                window.get(leftChar) - 1
            );

            if (
                required.has(leftChar) &&
                window.get(leftChar) < required.get(leftChar)
            ) {
                formed--;
            }

            left++;
        }
    }

    if (minLength === Infinity) {
        return "";
    }

    return s.slice(minStart, minStart + minLength);
}