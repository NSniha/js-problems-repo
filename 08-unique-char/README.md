# Find the First Unique Character

A JavaScript solution for finding the first character in a string that appears exactly once.

## Problem Statement

Given a string, find the first character that appears only once in the string.

If there is no unique character, return `-1`.

A character is considered unique if its total frequency in the string is exactly `1`.

## Examples

### Example 1

Input:

```text
s = "aabbcdeff"
```

Output:

```text
"c"
```

Explanation:

```text
a = 2
b = 2
c = 1
d = 1
e = 1
f = 2
```

Although `c`, `d`, and `e` each appear once, `c` is the first unique character encountered in the string.

### Example 2

Input:

```text
s = "aabb"
```

Output:

```text
-1
```

Explanation:

Both `a` and `b` appear more than once, so there is no unique character.

## Solution

```javascript
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
```

## How It Works

The solution uses a frequency counter.

First, an empty object is created:

```javascript
const frequency = {};
```

The first loop counts how many times every character appears:

```javascript
for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}
```

For example:

```text
"aabbcdeff"
```

produces a frequency map similar to:

```javascript
{
    a: 2,
    b: 2,
    c: 1,
    d: 1,
    e: 1,
    f: 2
}
```

Then the string is traversed a second time:

```javascript
for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]] === 1) {
        return s[i];
    }
}
```

The first character whose frequency is `1` is returned immediately.

If no such character exists:

```javascript
return -1;
```

## Why Two Loops Are Used

The first loop determines the frequency of every character.

The second loop preserves the original character order and finds the first unique character.

This is important because the problem asks for the first unique character, not just any unique character.

## Test Cases

```javascript
console.log(findFirstUniqueChar("aabbcdeff"));
// "c"

console.log(findFirstUniqueChar("aabb"));
// -1

console.log(findFirstUniqueChar("leetcode"));
// "l"

console.log(findFirstUniqueChar("aabbccd"));
// "d"

console.log(findFirstUniqueChar("z"));
// "z"

console.log(findFirstUniqueChar(""));
// -1
```

## Complexity

### Time Complexity

```text
O(n)
```

The string is traversed twice, so the overall complexity remains linear.

### Space Complexity

```text
O(k)
```

Where `k` is the number of distinct characters.

Since the constraints contain lowercase English letters only, the maximum number of keys is limited.

## Topics

- JavaScript
- String
- Hash Map
- Frequency Counter
- Objects
- Loops

## Repository Structure

```text
first-unique-character/
│
├── README.md
└── solution.js
```