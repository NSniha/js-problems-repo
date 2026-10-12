Group Anagrams

Given an array of strings, group all anagrams together.

Two strings are anagrams if they contain exactly the same characters with the same frequencies, but possibly in a different order.

Example 1

Input:
["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]

Example 2

Input:
[""]

Output:
[[""]]

Example 3

Input:
["a"]

Output:
[["a"]]

Constraints:

- 1 <= words.length <= 10000
- Each element is a string.
- Words consist of lowercase English letters.