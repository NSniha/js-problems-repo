# Truncate a String

A JavaScript string manipulation problem where a string must be shortened to a specified maximum length and an ellipsis (`...`) added when truncation is required.

---

## Problem

Given a string `str` and a non-negative integer `maxLength`, return a truncated version of the string when its length exceeds `maxLength`.

If truncation is required, append:

```text
...
```

to the result.

If the original string already fits within `maxLength`, return it unchanged.

There is also a special case: when `maxLength` is `3` or less and truncation is required, return only:

```text
...
```

---

## Example

```javascript
truncateString("Hello world, this is a long string", 10);
```

Output:

```text
Hello w...
```

Another example:

```javascript
truncateString("Short text", 15);
```

Output:

```text
Short text
```

---

## Solution

```javascript
function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= 3) {
    return "...";
  }

  return str.slice(0, maxLength - 3) + "...";
}
```

---

## Approach

The solution can be divided into three cases.

### 1. Check Whether Truncation Is Necessary

First, compare the string length with `maxLength`.

```javascript
if (str.length <= maxLength) {
  return str;
}
```

If the string already fits, return it without making any changes.

---

### 2. Handle Small `maxLength` Values

The ellipsis contains three characters:

```text
...
```

If `maxLength` is `3` or less and truncation is required, return only the ellipsis.

```javascript
if (maxLength <= 3) {
  return "...";
}
```

---

### 3. Truncate the String

When `maxLength` is greater than `3`, reserve three characters for the ellipsis.

```javascript
maxLength - 3
```

Then use `slice()` to extract the required portion:

```javascript
str.slice(0, maxLength - 3)
```

Finally, append the ellipsis:

```javascript
return str.slice(0, maxLength - 3) + "...";
```

---

## Step-by-Step Example

Suppose:

```javascript
str = "Hello world, this is a long string";
maxLength = 10;
```

The ellipsis requires:

```text
3 characters
```

Therefore, the number of characters we can keep is:

```text
10 - 3 = 7
```

The first seven characters are:

```text
Hello w
```

After adding the ellipsis:

```text
Hello w...
```

Final result:

```text
Hello w...
```

---

## Test Cases

```javascript
console.log(
  truncateString("Hello world, this is a long string", 10)
);
// Hello w...

console.log(
  truncateString("Short text", 15)
);
// Short text

console.log(
  truncateString("JavaScript", 7)
);
// Java...

console.log(
  truncateString("Hello", 3)
);
// ...

console.log(
  truncateString("Hello", 2)
);
// ...

console.log(
  truncateString("", 5)
);
// ""
```

---

## Time Complexity

### O(n)

In the truncation case, creating the sliced string may require copying characters from the original string.

---

## Space Complexity

### O(n)

A new string may be created to store the truncated result.

---

## Concepts Used

- JavaScript Strings
- `String.length`
- `String.prototype.slice()`
- Conditional Statements
- String Concatenation
- Edge Case Handling

---

## Project Structure

```text
01-truncate-string/
├── question.md
├── solution.js
└── README.md
```

---

## Expected Results

```javascript
truncateString("Hello world, this is a long string", 10);
// "Hello w..."

truncateString("Short text", 15);
// "Short text"
```