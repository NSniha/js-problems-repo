Merge Overlapping Intervals

Given an array of intervals where each interval is represented as:

[start, end]

merge all overlapping intervals and return the resulting non-overlapping intervals.

Example 1

Input:
intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

Output:
[[1, 6], [8, 10], [15, 18]]

Explanation:
[1, 3] and [2, 6] overlap, so they become [1, 6].

Example 2

Input:
intervals = [[1, 4], [4, 5]]

Output:
[[1, 5]]

Constraints:

- 0 <= intervals.length <= 10000
- Each interval contains exactly two integers.
- start <= end