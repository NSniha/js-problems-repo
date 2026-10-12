# Longest Substring Without Repeating Characters

A JavaScript solution for finding the length of the longest substring containing no duplicate characters.

## Problem Statement

Given a string `s`, determine the length of the longest substring in which every character is unique.

A substring contains consecutive characters from the original string.

## Examples

### Example 1

```text
Input: "abcabcbb"
Output: 3
```

The longest substring is:

```text
"abc"
```

### Example 2

```text
Input: "bbbbb"
Output: 1
```

### Example 3

```text
Input: "pwwkew"
Output: 3
```

## Solution

```javascript
function lengthOfLongestSubstring(s) {
    const lastSeen = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (lastSeen.has(char) && lastSeen.get(char) >= left) {
            left = lastSeen.get(char) + 1;
        }

        lastSeen.set(char, right);

        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}
```

## Approach

This solution uses the **Sliding Window** technique.

Two pointers are maintained:

- `left` represents the beginning of the current substring.
- `right` moves through the string.

A `Map` stores the most recent index of every character.

When a duplicate character is found inside the current window, the `left` pointer moves past its previous position.

## Test Cases

```javascript
console.log(lengthOfLongestSubstring("abcabcbb"));
// 3

console.log(lengthOfLongestSubstring("bbbbb"));
// 1

console.log(lengthOfLongestSubstring("pwwkew"));
// 3

console.log(lengthOfLongestSubstring(""));
// 0

console.log(lengthOfLongestSubstring("abcdef"));
// 6
```

## Complexity

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

## Topics

- JavaScript
- Strings
- Sliding Window
- Hash Map
- Two Pointers