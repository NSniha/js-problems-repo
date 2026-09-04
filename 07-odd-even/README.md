# Count Even and Odd Numbers

A simple JavaScript solution that counts how many even and odd numbers are present in an array of integers.

## Problem Statement

Given an array of integers, return an object containing the total count of even and odd numbers.

The returned object should have the following format:

```javascript
{
    even: numberOfEvenValues,
    odd: numberOfOddValues
}
```

A number is considered even if it is divisible by `2` with no remainder.

Otherwise, it is considered odd.

## Examples

### Example 1

Input:

```text
numbers = [1, 2, 3, 4, 5]
```

Output:

```javascript
{
    even: 2,
    odd: 3
}
```

### Example 2

Input:

```text
numbers = [10, 20, 30]
```

Output:

```javascript
{
    even: 3,
    odd: 0
}
```

## Solution

```javascript
function countEvenOdd(numbers) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return {
        even: even,
        odd: odd
    };
}
```

## How It Works

First, two counters are created:

```javascript
let even = 0;
let odd = 0;
```

The function then loops through every number in the array.

```javascript
for (let i = 0; i < numbers.length; i++) {
```

For each number, the remainder operator `%` is used to determine whether the value is even or odd.

```javascript
numbers[i] % 2 === 0
```

If the remainder is `0`, the number is even:

```javascript
even++;
```

Otherwise, the number is odd:

```javascript
odd++;
```

Finally, both counts are returned inside an object:

```javascript
return {
    even: even,
    odd: odd
};
```

## Test Cases

```javascript
console.log(countEvenOdd([1, 2, 3, 4, 5]));
// { even: 2, odd: 3 }

console.log(countEvenOdd([10, 20, 30]));
// { even: 3, odd: 0 }

console.log(countEvenOdd([1, 3, 5, 7]));
// { even: 0, odd: 4 }

console.log(countEvenOdd([0, 1, 2]));
// { even: 2, odd: 1 }

console.log(countEvenOdd([-4, -3, -2, -1]));
// { even: 2, odd: 2 }

console.log(countEvenOdd([]));
// { even: 0, odd: 0 }
```

## Important Note

Zero is considered an even number because:

```text
0 % 2 = 0
```

Negative integers are also handled correctly.

For example:

```text
-4 % 2 = 0
```

So `-4` is even.

## Complexity

### Time Complexity

```text
O(n)
```

The function visits every element of the array once.

### Space Complexity

```text
O(1)
```

Only two counter variables are used regardless of the input size.

## Topics

- JavaScript
- Arrays
- Loops
- Conditionals
- Modulo Operator
- Even and Odd Numbers

## Repository Structure

```text
count-even-odd/
│
├── README.md
└── solution.js
```