# Repeated Digit Sum

A simple JavaScript problem that repeatedly adds the digits of a non-negative integer until only a single digit remains.

## Problem Statement

Given a non-negative integer `n`, repeatedly add all of its digits until the result contains only one digit.

Return the final single-digit result.

## Examples

### Example 1

```text
Input: n = 9875
Output: 2
```

Explanation:

```text
9 + 8 + 7 + 5 = 29
2 + 9 = 11
1 + 1 = 2
```

So the final result is `2`.

### Example 2

```text
Input: n = 123
Output: 6
```

Explanation:

```text
1 + 2 + 3 = 6
```

Since `6` is already a single digit, the answer is `6`.

## Constraints

- `n` will be a non-negative integer.

## JavaScript Solution

```js
function repeatedDigitSum(n) {
    while (n >= 10) {
        let sum = 0;

        for (let digit of String(n)) {
            sum += Number(digit);
        }

        n = sum;
    }

    return n;
}
```

## How It Works

The solution uses a `while` loop to continue processing the number while it has more than one digit.

First, the number is converted into a string so that each digit can be accessed individually.

Each digit is converted back into a number and added to `sum`.

The calculated sum becomes the new value of `n`.

This process continues until `n` becomes a single-digit number.

Finally, the function returns that number.

## Test Cases

```js
console.log(repeatedDigitSum(9875)); // 2
console.log(repeatedDigitSum(123));  // 6
console.log(repeatedDigitSum(9));    // 9
console.log(repeatedDigitSum(0));    // 0
```

## Complexity

Time Complexity: `O(d × k)`

Where `d` is the number of digits processed and `k` is the number of times the digit-sum operation is repeated.

Space Complexity: `O(d)`

The number is temporarily converted into a string for processing its digits.

## Topics

- JavaScript
- Math
- Numbers
- Loops
- String Conversion
- Problem Solving

## Author

Solved using JavaScript.