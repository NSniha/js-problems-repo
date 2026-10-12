# Product of Array Except Self

A JavaScript solution for calculating the product of every array element except the element at the current index.

The solution does not use division.

## Problem Statement

Given an integer array `numbers`, create a new array where:

```text
result[i]
```

contains the product of every element except:

```text
numbers[i]
```

## Example

```text
Input:
[1, 2, 3, 4]

Output:
[24, 12, 8, 6]
```

Explanation:

```text
24 = 2 × 3 × 4
12 = 1 × 3 × 4
8  = 1 × 2 × 4
6  = 1 × 2 × 3
```

## Solution

```javascript
function productExceptSelf(numbers) {
    const result = new Array(numbers.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < numbers.length; i++) {
        result[i] = prefix;
        prefix *= numbers[i];
    }

    let suffix = 1;

    for (let i = numbers.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= numbers[i];
    }

    return result;
}
```

## Approach

The solution uses two passes.

### Prefix Product

During the first pass, each position stores the product of all numbers before it.

For:

```text
[1, 2, 3, 4]
```

the prefix values become:

```text
[1, 1, 2, 6]
```

### Suffix Product

The array is then processed from right to left.

Each existing prefix value is multiplied by the product of all elements to its right.

This produces:

```text
[24, 12, 8, 6]
```

## Why No Division?

Using division can fail when the array contains zero.

The prefix/suffix approach correctly handles zero values without requiring special cases.

## Test Cases

```javascript
console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// [0, 0, 9, 0, 0]

console.log(productExceptSelf([2, 3]));
// [3, 2]
```

## Complexity

- Time Complexity: `O(n)`
- Extra Space Complexity: `O(1)`

The returned result array is not counted as extra space.

## Topics

- JavaScript
- Arrays
- Prefix Product
- Suffix Product
- Array Algorithms