# Temperature Converter

A simple JavaScript problem that converts temperatures between Celsius and Fahrenheit.

## Problem Overview

The function receives a temperature value and its current unit.

If the unit is `"C"`, the value is converted from Celsius to Fahrenheit.

If the unit is `"F"`, the value is converted from Fahrenheit to Celsius.

The final result is returned as a number rounded to a maximum of 2 decimal places.

## Conversion Formulas

### Celsius to Fahrenheit

```text
F = (C × 9 / 5) + 32
```

### Fahrenheit to Celsius

```text
C = (F - 32) × 5 / 9
```

## Solution

```js
function convertTemperature(value, unit) {
    let result;

    if (unit === "C") {
        result = (value * 9) / 5 + 32;
    } else {
        result = ((value - 32) * 5) / 9;
    }

    return Math.round(result * 100) / 100;
}
```

## Examples

```js
convertTemperature(0, "C");
// 32
```

```js
convertTemperature(32, "F");
// 0
```

```js
convertTemperature(100, "C");
// 212
```

```js
convertTemperature(98.6, "F");
// 37
```

## How It Works

The function first checks the value of `unit`.

If the unit is `"C"`, it uses the Celsius-to-Fahrenheit formula:

```js
result = (value * 9) / 5 + 32;
```

Otherwise, it uses the Fahrenheit-to-Celsius formula:

```js
result = ((value - 32) * 5) / 9;
```

Finally, the result is rounded to a maximum of 2 decimal places:

```js
Math.round(result * 100) / 100
```

This keeps the return value as a number instead of converting it into a string.

## Test Cases

```js
console.log(convertTemperature(0, "C")); // 32
console.log(convertTemperature(32, "F")); // 0
console.log(convertTemperature(100, "C")); // 212
console.log(convertTemperature(98.6, "F")); // 37
```

## Complexity

Time Complexity: `O(1)`

Space Complexity: `O(1)`

The function performs only a fixed number of calculations.

## Topics

- JavaScript
- Functions
- Numbers
- Conditionals
- Math
- Temperature Conversion
- Problem Solving