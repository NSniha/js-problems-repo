# Group Anagrams

A JavaScript solution for grouping words that are anagrams of each other.

## Problem Statement

Given an array of strings, group all words that contain the same characters with the same frequencies.

For example:

```text
"eat"
"tea"
"ate"
```

are all anagrams.

## Example

```text
Input:
["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]
```

## Solution

```javascript
function groupAnagrams(words) {
    const groups = new Map();

    for (const word of words) {
        const key = word.split("").sort().join("");

        if (!groups.has(key)) {
            groups.set(key, []);
        }

        groups.get(key).push(word);
    }

    return Array.from(groups.values());
}
```

## How It Works

Anagrams produce the same string when their characters are sorted.

For example:

```text
eat → aet
tea → aet
ate → aet
```

The sorted version is used as a key inside a `Map`.

Words with the same key are stored in the same group.

## Test Cases

```javascript
console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz"]));
// [["abc", "bca", "cab"], ["xyz"]]
```

## Complexity

If:

- `n` = number of words
- `k` = maximum word length

Then:

- Time Complexity: `O(n * k log k)`
- Space Complexity: `O(n * k)`

## Topics

- JavaScript
- Arrays
- Strings
- Hash Map
- Sorting
- Anagrams