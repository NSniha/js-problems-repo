# Repeated Digit Sum

## Problem Statement

Given a non-negative integer `n`, repeatedly add all of its digits until the result contains only one digit.

Return the final single-digit result.

## Examples

### Example 1

```text
Input: n = 9875
Output: 2
```

### Explanation

```text
9 + 8 + 7 + 5 = 29
2 + 9 = 11
1 + 1 = 2
```

So the final result is:

```text
2
```

---

### Example 2

```text
Input: n = 123
Output: 6
```

### Explanation

```text
1 + 2 + 3 = 6
```

Since `6` is already a single-digit number, the final result is `6`.

## Function Signature

```js
function repeatedDigitSum(n) {
    // Your code here
}
```

## Constraints

- `n` will be a non-negative integer.
- The function should return a single-digit number.
- Continue summing the digits until the result is less than `10`.

## Expected Results

```js
repeatedDigitSum(9875);
// 2

repeatedDigitSum(123);
// 6

repeatedDigitSum(9);
// 9

repeatedDigitSum(0);
// 0
```

## Topics

- JavaScript
- Math
- Numbers
- Loops
- Strings
- Problem Solving