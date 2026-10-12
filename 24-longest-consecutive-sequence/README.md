# Longest Consecutive Sequence

A JavaScript solution for finding the length of the longest consecutive sequence in an unsorted array of integers.

This problem focuses on efficient lookup using a `Set` and requires an `O(n)` time complexity solution.

## Problem Statement

Given an unsorted array of integers, return the length of the longest sequence of consecutive numbers.

A consecutive sequence contains numbers where each next number is exactly `1` greater than the previous number.

The elements do not need to appear consecutively in the original array.

## Examples

### Example 1

```text
Input:
numbers = [100, 4, 200, 1, 3, 2]

Output:
4
```

Explanation:

The longest consecutive sequence is:

```text
[1, 2, 3, 4]
```

Therefore, the answer is:

```text
4
```

### Example 2

```text
Input:
numbers = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

Output:
9
```

Explanation:

The longest consecutive sequence is:

```text
[0, 1, 2, 3, 4, 5, 6, 7, 8]
```

Its length is `9`.

## Constraints

- `0 <= numbers.length <= 10000`
- `numbers` contains integers.
- Duplicate values may exist.
- The solution should run in `O(n)` time.

## Solution

```javascript
function longestConsecutive(numbers) {
    const numberSet = new Set(numbers);

    let longest = 0;

    for (const number of numberSet) {
        if (!numberSet.has(number - 1)) {
            let currentNumber = number;
            let currentLength = 1;

            while (numberSet.has(currentNumber + 1)) {
                currentNumber++;
                currentLength++;
            }

            longest = Math.max(longest, currentLength);
        }
    }

    return longest;
}
```

## Approach

The solution uses a JavaScript `Set` for fast value lookup.

First, all numbers are stored in a `Set`:

```javascript
const numberSet = new Set(numbers);
```

Using a `Set` also automatically removes duplicate values.

Then each number is checked to determine whether it is the beginning of a sequence.

A number is considered the start of a sequence only when:

```javascript
!numberSet.has(number - 1)
```

For example, if the current number is:

```text
4
```

and `3` already exists, then `4` cannot be the beginning of a consecutive sequence.

However, if the current number is:

```text
1
```

and `0` does not exist, then `1` is the beginning of a new sequence.

The algorithm then continues checking:

```text
2
3
4
5
...
```

until the next consecutive number is no longer found.

The maximum sequence length is stored in:

```javascript
longest
```

## Step-by-Step Example

Consider:

```javascript
numbers = [100, 4, 200, 1, 3, 2];
```

The `Set` becomes:

```text
{100, 4, 200, 1, 3, 2}
```

### Checking `100`

```text
99 does not exist
```

So `100` starts a sequence.

Sequence:

```text
[100]
```

Length:

```text
1
```

### Checking `4`

```text
3 exists
```

So `4` is not the beginning of a sequence.

### Checking `200`

```text
199 does not exist
```

Sequence:

```text
[200]
```

Length:

```text
1
```

### Checking `1`

```text
0 does not exist
```

So `1` starts a new sequence.

The algorithm finds:

```text
1 → 2 → 3 → 4
```

Sequence length:

```text
4
```

Therefore:

```text
longest = 4
```

## Why Use a Set?

A `Set` allows fast membership checking.

For example:

```javascript
numberSet.has(5);
```

has approximately constant-time lookup.

If we repeatedly searched through the original array instead, the solution could become:

```text
O(n²)
```

Using a `Set` allows the algorithm to achieve the required:

```text
O(n)
```

time complexity.

## Important Optimization

The algorithm does not start counting from every number.

It only starts counting when the previous number does not exist:

```javascript
if (!numberSet.has(number - 1))
```

This prevents the same sequence from being processed multiple times.

For example:

```text
1, 2, 3, 4
```

The sequence is calculated starting from `1`.

The algorithm does not calculate the same sequence again starting from `2`, `3`, or `4`.

## Test Cases

```javascript
console.log(
    longestConsecutive([100, 4, 200, 1, 3, 2])
);
// 4
```

```javascript
console.log(
    longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
);
// 9
```

### Empty Array

```javascript
console.log(longestConsecutive([]));
// 0
```

### Single Element

```javascript
console.log(longestConsecutive([5]));
// 1
```

### Duplicate Values

```javascript
console.log(longestConsecutive([1, 2, 0, 1]));
// 3
```

The longest sequence is:

```text
[0, 1, 2]
```

### Negative Numbers

```javascript
console.log(
    longestConsecutive([-2, -1, 0, 1, 5])
);
// 4
```

The longest sequence is:

```text
[-2, -1, 0, 1]
```

### Unordered Sequence

```javascript
console.log(
    longestConsecutive([9, 1, 4, 7, 3, 2, 6, 5, 8])
);
// 9
```

## Complexity Analysis

### Time Complexity

```text
O(n)
```

Creating the `Set` takes `O(n)` time.

Each number is processed efficiently, and sequence traversal only begins from valid starting points.

### Space Complexity

```text
O(n)
```

A `Set` is used to store the unique numbers from the input array.

## Edge Cases

The solution correctly handles:

- Empty arrays
- Single-element arrays
- Duplicate numbers
- Negative numbers
- Zero
- Already sorted arrays
- Completely unsorted arrays
- Arrays with no consecutive sequence longer than one

## Technologies and Concepts

- JavaScript
- Arrays
- Set
- Hashing
- Loops
- Sequence Detection
- Algorithm Optimization
- Time Complexity

## Repository Structure

```text
longest-consecutive-sequence/
│
├── README.md
└── solution.js
```

## Key Learning

The main idea behind this problem is recognizing that sorting is not necessary.

Although sorting could solve the problem in:

```text
O(n log n)
```

using a `Set` allows us to reduce the time complexity to:

```text
O(n)
```

The most important optimization is identifying the beginning of a sequence before starting to count consecutive values.