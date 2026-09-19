# Compress Consecutive Characters

## Problem Description

Write a function `compressCharacters` that takes a string and compresses consecutive repeated characters.

For every group of consecutive identical characters:

- Add the character to the result.
- If the character appears more than once consecutively, add its count after the character.
- If the character appears only once, do not add `1`.

The order of the characters must remain unchanged.

---

## Function Signature

```javascript
function compressCharacters(str) {
  // Implement your solution here
}
```

---

## Examples

### Example 1

```javascript
compressCharacters("aaabbc");
```

### Expected Output

```text
a3b2c
```

### Explanation

The input contains:

```text
aaa → a3
bb  → b2
c   → c
```

So the final result is:

```text
a3b2c
```

---

### Example 2

```javascript
compressCharacters("hello");
```

### Expected Output

```text
hel2o
```

### Explanation

The two consecutive `l` characters are compressed to:

```text
l2
```

The other characters occur only once, so no count is added.

---

### Example 3

```javascript
compressCharacters("abc");
```

### Expected Output

```text
abc
```

Each character appears only once consecutively, so the string remains unchanged.

---

### Example 4

```javascript
compressCharacters("");
```

### Expected Output

```text

```

The function should return an empty string when the input is empty.

---

## Constraints

- `str` will be a string.
- The string may be empty.
- Characters should only be grouped when they are consecutive.
- A count should only be added when it is greater than `1`.
- The original order of characters must be preserved.

---

## Topics

- String
- Loop
- String Manipulation
- Run-Length Encoding
- Counting
- Easy

---

## Hints

### Hint 1

Keep track of how many times the current character appears consecutively.

You can start with:

```javascript
let count = 1;
```

---

### Hint 2

Compare the current character with the previous character.

For example:

```javascript
if (str[i] === str[i - 1]) {
  count++;
}
```

If they are the same, increase the count.

---

### Hint 3

When the current character is different from the previous character, the previous group has finished.

At that point:

1. Add the previous character to the result.
2. Add the count only if the count is greater than `1`.
3. Reset the count back to `1`.

---

### Hint 4

Think carefully about the final group of characters.

One useful approach is to allow the loop to run one step beyond the last valid string index so that the last group is processed using the same logic.

---

### Hint 5

Handle the empty string separately.

For example:

```javascript
if (str.length === 0) {
  return "";
}
```