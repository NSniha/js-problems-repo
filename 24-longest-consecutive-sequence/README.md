# Longest Consecutive Sequence

A JavaScript solution for finding the length of the longest consecutive integer sequence in an unsorted array.

## Problem Statement

Given an unsorted array of integers, determine the length of the longest sequence where every number differs from the previous number by exactly `1`.

The solution should run in `O(n)` time.

## Example

Input:

```text
[100, 4, 200, 1, 3, 2]
```

The sequence:

```text
1, 2, 3, 4
```

is the longest consecutive sequence.

Output:

```text
4
```

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

The array is converted into a `Set`.

This allows values to be checked in approximately constant time.

For each number, we check whether:

```javascript
number - 1
```

exists.

If it does not exist, the current number is the beginning of a sequence.

For example:

```text
[100, 4, 200, 1, 3, 2]
```

When checking `1`:

```text
0 does not exist
```

Therefore `1` is the beginning of a sequence.

The algorithm then checks:

```text
2
3
4
5
```

Since `2`, `3`, and `4` exist but `5` does not, the sequence length is:

```text
4
```

## Why Use a Set?

Searching an array repeatedly could result in `O(n²)` complexity.

A `Set` allows fast membership checking and helps achieve an overall `O(n)` solution.

## Test Cases

```javascript
console.log(
    longestConsecutive([100, 4, 200, 1, 3, 2])
);
// 4

console.log(
    longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
);
// 9

console.log(longestConsecutive([]));
// 0

console.log(longestConsecutive([5]));
// 1

console.log(longestConsecutive([1, 2, 0, 1]));
// 3
```

## Complexity

### Time Complexity

```text
O(n)
```

### Space Complexity

```text
O(n)
```

## Topics

- JavaScript
- Arrays
- Set
- Hashing
- Sequence Detection
- Algorithm Optimization