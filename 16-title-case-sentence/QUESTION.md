# Title Case a Sentence

## Problem Description

Write a function `titleCaseSentence` that takes a string and returns a new string where the first letter of every word is uppercase and all remaining letters are lowercase.

The function should also:

- Remove leading spaces
- Remove trailing spaces
- Replace multiple spaces between words with a single space
- Return an empty string if the input contains only whitespace

---

## Function Signature

```javascript
function titleCaseSentence(str) {
  // Implement your solution here
}
```

---

## Examples

### Example 1

```javascript
titleCaseSentence("hello world");
```

### Expected Output

```text
Hello World
```

---

### Example 2

```javascript
titleCaseSentence("a short sentence");
```

### Expected Output

```text
A Short Sentence
```

---

### Example 3

```javascript
titleCaseSentence("   hELLo    WORLD   ");
```

### Expected Output

```text
Hello World
```

### Explanation

The function should:

1. Remove spaces from the beginning and end.
2. Convert all characters to lowercase.
3. Treat multiple spaces between words as a single separator.
4. Capitalize the first letter of each word.

---

### Example 4

```javascript
titleCaseSentence("   ");
```

### Expected Output

```text

```

The result should be an empty string.

---

## Constraints

- `str` will be a string.
- The string may contain uppercase and lowercase letters.
- The string may contain leading or trailing spaces.
- Multiple spaces may appear between words.
- The input may be empty or contain only whitespace.

---

## Topics

- String
- Array
- String Manipulation
- Array Mapping
- Regular Expressions
- Easy

---

## Hints

### Hint 1

Start by removing unnecessary whitespace from the beginning and end of the string.

You can use:

```javascript
str.trim()
```

For example:

```javascript
"   hello world   ".trim()
```

becomes:

```text
hello world
```

---

### Hint 2

Convert the entire string to lowercase before capitalizing individual words.

For example:

```javascript
"heLLo WoRLD".toLowerCase()
```

becomes:

```text
hello world
```

This makes it easier to ensure that only the first character of each word is uppercase.

---

### Hint 3

You can split the sentence into words using a regular expression:

```javascript
.split(/\s+/)
```

The `\s+` pattern matches one or more whitespace characters.

So:

```text
hello     world
```

can be treated as:

```javascript
["hello", "world"]
```

---

### Hint 4

Use `map()` to transform each word.

For each word:

1. Take the first character.
2. Convert it to uppercase.
3. Add the remaining characters.

For example:

```javascript
word.charAt(0).toUpperCase() + word.slice(1)
```

---

### Hint 5

After transforming every word, use:

```javascript
.join(" ")
```

to combine the words back into a sentence with exactly one space between them.