# Minimum Window Substring

A JavaScript implementation of the Minimum Window Substring problem using the Sliding Window technique and frequency maps.

The goal is to find the smallest substring of a source string that contains every required character from another string.

## Problem Statement

Given two strings:

```text
s
t
```

return the smallest substring of `s` that contains every character from `t`.

Duplicate characters must also be respected.

If no valid substring exists, return:

```text
""
```

## Examples

### Example 1

```text
Input:
s = "ADOBECODEBANC"
t = "ABC"

Output:
"BANC"
```

Explanation:

Several substrings contain `A`, `B`, and `C`, but:

```text
"BANC"
```

is the shortest valid substring.

### Example 2

```text
Input:
s = "a"
t = "a"

Output:
"a"
```

### Example 3

```text
Input:
s = "a"
t = "aa"

Output:
""
```

The source string contains only one `a`, but two are required.

## Solution

```javascript
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
```

## Approach

This solution uses a **Sliding Window**.

The window is controlled using two pointers:

```text
left
right
```

The `right` pointer expands the window until all required characters are present.

Once the window becomes valid, the `left` pointer begins moving forward to make the window as small as possible.

## Frequency Map

First, the required frequency of each character in `t` is stored.

For:

```text
t = "AABC"
```

the frequency map represents:

```text
A = 2
B = 1
C = 1
```

This is important because duplicate characters must also be included.

## How the Sliding Window Works

Consider:

```text
s = "ADOBECODEBANC"
t = "ABC"
```

The right pointer expands until the current window contains:

```text
A
B
C
```

Once all required characters are available, the window is valid.

The algorithm then moves the left pointer forward while the window remains valid.

This gradually removes unnecessary characters and finds a smaller window.

Eventually the minimum valid window becomes:

```text
"BANC"
```

## Important Variables

### `required`

Stores how many times each character is required.

```javascript
const required = new Map();
```

### `window`

Stores the current character frequencies inside the sliding window.

```javascript
const window = new Map();
```

### `formed`

Tracks how many required character conditions are currently satisfied.

```javascript
let formed = 0;
```

### `needed`

Represents the number of unique characters that must satisfy their required frequencies.

```javascript
const needed = required.size;
```

## Test Cases

```javascript
console.log(
    minWindow("ADOBECODEBANC", "ABC")
);
// "BANC"
```

```javascript
console.log(
    minWindow("a", "a")
);
// "a"
```

```javascript
console.log(
    minWindow("a", "aa")
);
// ""
```

```javascript
console.log(
    minWindow("aa", "aa")
);
// "aa"
```

```javascript
console.log(
    minWindow("ab", "b")
);
// "b"
```

## Duplicate Character Test

```javascript
console.log(
    minWindow("AAABBC", "AABC")
);
```

A valid window must contain:

```text
A = 2
B = 1
C = 1
```

Therefore duplicate requirements are handled correctly.

## Complexity Analysis

### Time Complexity

```text
O(n + m)
```

Where:

- `n` is the length of `s`
- `m` is the length of `t`

Each character is processed only a limited number of times by the sliding window.

### Space Complexity

```text
O(k)
```

Where `k` is the number of unique characters stored in the frequency maps.

## Edge Cases

The solution correctly handles:

- Single-character strings
- Duplicate required characters
- No valid substring
- Entire source being the answer
- Uppercase and lowercase characters
- Extra characters inside the source
- Required string longer than the source

## Concepts Practiced

- JavaScript
- Strings
- Sliding Window
- Two Pointers
- Hash Map
- Frequency Counter
- Algorithm Optimization
- Time Complexity Analysis

## Repository Structure

```text
minimum-window-substring/
│
├── README.md
└── solution.js
```

## Key Learning

The important idea is to avoid checking every possible substring.

A brute-force solution could require approximately:

```text
O(n²)
```

or worse.

Using a sliding window allows us to expand and shrink only when necessary, resulting in a much more efficient solution.