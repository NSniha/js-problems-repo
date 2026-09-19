# Truncate a String

## Problem Description

Write a function `truncateString` that takes a string and a maximum length as input.

Truncate the given string if its length is greater than the specified `maxLength`.

If truncation occurs, append `"..."` to the end of the truncated string.

If the string's length is already within or equal to `maxLength`, return the string unchanged.

### Special Consideration

If `maxLength` is `3` or less and truncation is necessary, the result should simply be:

```text
...
```

This is because there isn't enough space for both content and the ellipsis.

---

## Function Signature

```javascript
function truncateString(str, maxLength) {
  // Implement your solution here
}
```

---

## Examples

### Example 1

```javascript
truncateString("Hello world, this is a long string", 10);
```

### Expected Output

```text
Hello w...
```

### Input

```text
str = "Hello world, this is a long string"
maxLength = 10
```

### Output

```text
Hello w...
```

---

### Example 2

```javascript
truncateString("Short text", 15);
```

### Expected Output

```text
Short text
```

### Input

```text
str = "Short text"
maxLength = 15
```

### Output

```text
Short text
```

---

## Constraints

- `str` will be a string.
- `maxLength` will be a non-negative integer.

---

## Topics

- String
- Slice
- Conditional Logic
- String Manipulation

---

## Hints

### Hint 1

Consider the length of the ellipsis itself.

The ellipsis:

```text
...
```

contains `3` characters.

### Hint 2

Think about what should happen if `maxLength` is too small to show any part of the original string plus the ellipsis.

If `maxLength` is `3` or less and truncation is required, simply return:

```text
...
```

### Hint 3

Use `String.prototype.slice()` to get the beginning portion of the string.

Remember to leave room for the three characters used by `"..."`.

For example, if:

```text
maxLength = 10
```

you should keep:

```text
10 - 3 = 7
```

characters from the original string before adding `"..."`.