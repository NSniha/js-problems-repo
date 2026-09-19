# Title Case a Sentence

A JavaScript string manipulation problem where every word in a sentence must begin with an uppercase letter while the remaining letters are lowercase.

The solution also normalizes unnecessary whitespace.

---

## Problem Overview

Given a string, convert it into title case.

For example:

```javascript
titleCaseSentence("hello world");
```

should return:

```text
Hello World
```

The function should also correctly handle inconsistent capitalization and extra spaces.

For example:

```javascript
titleCaseSentence("   hELLo    WORLD   ");
```

should return:

```text
Hello World
```

---

## Solution

```javascript
function titleCaseSentence(str) {
  const words = str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
```

---

## Approach

The solution can be divided into five steps.

### Step 1: Remove Leading and Trailing Whitespace

Use:

```javascript
str.trim()
```

For example:

```text
"   hello world   "
```

becomes:

```text
"hello world"
```

---

### Step 2: Convert Everything to Lowercase

Use:

```javascript
.toLowerCase()
```

For example:

```text
"hELLo WORLD"
```

becomes:

```text
"hello world"
```

This ensures that all words have consistent casing before capitalization.

---

### Step 3: Split the Sentence into Words

Use:

```javascript
.split(/\s+/)
```

The regular expression:

```text
\s+
```

matches one or more whitespace characters.

Therefore:

```text
"hello     world"
```

becomes:

```javascript
["hello", "world"]
```

---

### Step 4: Capitalize Each Word

Use `map()` to transform every word:

```javascript
.map(word =>
  word.charAt(0).toUpperCase() + word.slice(1)
)
```

For example:

```text
hello
```

becomes:

```text
Hello
```

The first character:

```javascript
word.charAt(0)
```

is converted to uppercase:

```javascript
word.charAt(0).toUpperCase()
```

The rest of the word is obtained using:

```javascript
word.slice(1)
```

Then both parts are combined.

---

### Step 5: Join the Words

Finally, use:

```javascript
.join(" ")
```

to combine all transformed words with a single space between them.

For example:

```javascript
["Hello", "World"]
```

becomes:

```text
Hello World
```

---

## Step-by-Step Example

Input:

```javascript
titleCaseSentence("   hELLo    WORLD   ");
```

### Step 1

After `trim()`:

```text
hELLo    WORLD
```

### Step 2

After `toLowerCase()`:

```text
hello    world
```

### Step 3

After splitting:

```javascript
["hello", "world"]
```

### Step 4

After capitalization:

```javascript
["Hello", "World"]
```

### Step 5

After joining:

```text
Hello World
```

Final result:

```text
Hello World
```

---

## Test Cases

```javascript
console.log(
  titleCaseSentence("hello world")
);
// Hello World

console.log(
  titleCaseSentence("a short sentence")
);
// A Short Sentence

console.log(
  titleCaseSentence("   hELLo    WORLD   ")
);
// Hello World

console.log(
  titleCaseSentence("javascript is fun")
);
// Javascript Is Fun

console.log(
  titleCaseSentence("MULTIPLE     SPACES")
);
// Multiple Spaces

console.log(
  titleCaseSentence("")
);
// ""

console.log(
  titleCaseSentence("     ")
);
// ""
```

---

## Time Complexity

### O(n)

Every character of the input string is processed during trimming, lowercase conversion, splitting, capitalization, and joining.

Here, `n` represents the length of the input string.

---

## Space Complexity

### O(n)

Additional memory is required for the words array and the final transformed string.

---

## Concepts Used

- JavaScript Strings
- JavaScript Arrays
- `String.prototype.trim()`
- `String.prototype.toLowerCase()`
- `String.prototype.split()`
- Regular Expressions
- `Array.prototype.filter()`
- `Array.prototype.map()`
- `String.prototype.charAt()`
- `String.prototype.slice()`
- `Array.prototype.join()`
- Arrow Functions

---

## Project Structure

```text
03-title-case-sentence/
├── question.md
├── solution.js
└── README.md
```

---

## Expected Results

```javascript
titleCaseSentence("hello world");
// "Hello World"

titleCaseSentence("   hELLo    WORLD   ");
// "Hello World"

titleCaseSentence("a short sentence");
// "A Short Sentence"
```