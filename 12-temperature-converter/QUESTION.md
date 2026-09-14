# Temperature Converter

## Problem Statement

Write a function named `convertTemperature(value, unit)` that converts a temperature between Celsius and Fahrenheit.

The function will receive:

- `value` — the temperature value as a number.
- `unit` — a string indicating the current temperature unit.

The unit will be:

- `"C"` for Celsius
- `"F"` for Fahrenheit

If the unit is `"C"`, convert the temperature from Celsius to Fahrenheit.

If the unit is `"F"`, convert the temperature from Fahrenheit to Celsius.

The returned result should be a number and should be rounded to a maximum of 2 decimal places.

## Conversion Formulas

### Celsius to Fahrenheit

```text
F = (C × 9 / 5) + 32
```

### Fahrenheit to Celsius

```text
C = (F - 32) × 5 / 9
```

## Examples

### Example 1

```text
Input:
value = 0
unit = "C"

Output:
32
```

### Explanation

```text
(0 × 9 / 5) + 32 = 32
```

So:

```text
0°C = 32°F
```

---

### Example 2

```text
Input:
value = 32
unit = "F"

Output:
0
```

### Explanation

```text
(32 - 32) × 5 / 9 = 0
```

So:

```text
32°F = 0°C
```

## Function Signature

```js
function convertTemperature(value, unit) {
    // Your code here
}
```

## Expected Results

```js
convertTemperature(0, "C");
// 32

convertTemperature(32, "F");
// 0

convertTemperature(100, "C");
// 212

convertTemperature(98.6, "F");
// 37
```

## Requirements

- Use `"C"` to convert Celsius to Fahrenheit.
- Use `"F"` to convert Fahrenheit to Celsius.
- Return a number.
- Round the result to a maximum of 2 decimal places.

## Topics

- JavaScript
- Numbers
- Conditionals
- Math
- Functions
- Problem Solving