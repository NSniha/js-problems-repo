Minimum Window Substring

Given two strings `s` and `t`, find the smallest substring of `s`
that contains every character of `t`, including duplicate characters.

If no such substring exists, return an empty string.

Example 1

Input:
s = "ADOBECODEBANC"
t = "ABC"

Output:
"BANC"

Explanation:
"BANC" is the smallest substring that contains A, B, and C.

Example 2

Input:
s = "a"
t = "a"

Output:
"a"

Example 3

Input:
s = "a"
t = "aa"

Output:
""

Explanation:
The source string does not contain enough occurrences of "a".

Constraints:

- 1 <= s.length <= 10000
- 1 <= t.length <= 1000
- `s` and `t` may contain uppercase and lowercase English letters.
- Duplicate characters in `t` must also be included.