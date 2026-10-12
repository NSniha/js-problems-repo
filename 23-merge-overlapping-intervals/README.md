# Merge Overlapping Intervals

A JavaScript solution for merging overlapping ranges into a collection of non-overlapping intervals.

## Problem Statement

Each interval is represented using:

```text
[start, end]
```

If two intervals overlap, they should be combined.

## Example

Input:

```javascript
[
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]
```

Output:

```javascript
[
    [1, 6],
    [8, 10],
    [15, 18]
]
```

The intervals:

```text
[1, 3]
[2, 6]
```

overlap, so they are merged into:

```text
[1, 6]
```

## Solution

```javascript
function mergeIntervals(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    const sortedIntervals = [...intervals].sort(
        (a, b) => a[0] - b[0]
    );

    const merged = [sortedIntervals[0]];

    for (let i = 1; i < sortedIntervals.length; i++) {
        const current = sortedIntervals[i];
        const last = merged[merged.length - 1];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}
```

## Approach

First, intervals are sorted by their starting values.

Example:

```text
[8, 10], [1, 3], [2, 6]
```

becomes:

```text
[1, 3], [2, 6], [8, 10]
```

The algorithm then compares each interval with the last interval in the result.

If:

```javascript
current[0] <= last[1]
```

the intervals overlap.

Their ending point becomes:

```javascript
Math.max(last[1], current[1])
```

Otherwise, the current interval is added as a new interval.

## Test Cases

```javascript
console.log(
    mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ])
);

// [[1, 6], [8, 10], [15, 18]]

console.log(
    mergeIntervals([
        [1, 4],
        [4, 5]
    ])
);

// [[1, 5]]

console.log(mergeIntervals([]));
// []
```

## Complexity

- Sorting: `O(n log n)`
- Merging: `O(n)`

Overall:

```text
O(n log n)
```

Space Complexity:

```text
O(n)
```

## Topics

- JavaScript
- Arrays
- Sorting
- Intervals
- Greedy Algorithms