# Count Word Frequencies

A JavaScript problem that counts how many times each word appears in a sentence.

The solution ignores:

- Uppercase and lowercase differences
- Punctuation
- Extra spaces

The final result is returned as a JavaScript object where each word is a key and its frequency is the value.

---

## Problem Overview

Given a sentence, determine how many times each word appears.

For example:

```javascript
countWordFrequencies("Hello world, hello!");
```

returns:

```javascript
{
  hello: 2,
  world: 1
}
```

`"Hello"` and `"hello"` are considered the same word because the comparison is case-insensitive.

Punctuation such as commas and exclamation marks should not become part of a word.

---

## Solution

```javascript
function countWordFrequencies(sentence) {
  const words = sentence
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

  const frequencies = {};

  for (const word of words) {
    frequencies[word] = (frequencies[word] || 0) + 1;
  }

  return frequencies;
}
```

---

## Approach

The solution can be divided into four main steps.

### Step 1: Convert the Sentence to Lowercase

```javascript
sentence.toLowerCase()
```

This makes the comparison case-insensitive.

For example:

```text
Hello
HELLO
hello
```

all become:

```text
hello
```

---

### Step 2: Split the Sentence into Words

We use:

```javascript
.split(/[^a-z0-9]+/)
```

The regular expression:

```text
[^a-z0-9]+
```

means:

- `a-z` → lowercase letters
- `0-9` → numbers
- `^` inside the character class means "not"
- `+` means one or more occurrences

Therefore, the string is split whenever one or more non-alphanumeric characters appear.

For example:

```javascript
"hello, world!".split(/[^a-z0-9]+/);
```

produces words similar to:

```javascript
["hello", "world", ""]
```

---

### Step 3: Remove Empty Values

We use:

```javascript
.filter(Boolean)
```

This removes empty strings that may appear after splitting.

The final words array becomes:

```javascript
["hello", "world"]
```

---

### Step 4: Count Each Word

Create an empty object:

```javascript
const frequencies = {};
```

Then iterate through every word:

```javascript
for (const word of words) {
  frequencies[word] = (frequencies[word] || 0) + 1;
}
```

If a word has not appeared before:

```javascript
frequencies[word] || 0
```

evaluates to:

```text
0
```

Then `1` is added.

If the word already exists, its previous count is increased.

---

## Example Walkthrough

Consider:

```javascript
countWordFrequencies("Hello world, hello!");
```

### Step 1

Convert to lowercase:

```text
hello world, hello!
```

### Step 2

Split using non-alphanumeric characters:

```javascript
["hello", "world", "hello", ""]
```

### Step 3

Remove empty values:

```javascript
["hello", "world", "hello"]
```

### Step 4

Count each word.

First `"hello"`:

```javascript
{
  hello: 1
}
```

Then `"world"`:

```javascript
{
  hello: 1,
  world: 1
}
```

Then `"hello"` again:

```javascript
{
  hello: 2,
  world: 1
}
```

Final result:

```javascript
{
  hello: 2,
  world: 1
}
```

---

## Example 2

Input:

```javascript
countWordFrequencies(
  "The quick brown fox jumps over the lazy dog."
);
```

Result:

```javascript
{
  the: 2,
  quick: 1,
  brown: 1,
  fox: 1,
  jumps: 1,
  over: 1,
  lazy: 1,
  dog: 1
}
```

The word `"The"` at the beginning and `"the"` later in the sentence are both counted under:

```text
the
```

---

## Test Cases

```javascript
console.log(
  countWordFrequencies("Hello world, hello!")
);

// {
//   hello: 2,
//   world: 1
// }

console.log(
  countWordFrequencies(
    "The quick brown fox jumps over the lazy dog."
  )
);

// {
//   the: 2,
//   quick: 1,
//   brown: 1,
//   fox: 1,
//   jumps: 1,
//   over: 1,
//   lazy: 1,
//   dog: 1
// }

console.log(
  countWordFrequencies("JavaScript JavaScript javascript")
);

// {
//   javascript: 3
// }

console.log(
  countWordFrequencies("one, two; three!")
);

// {
//   one: 1,
//   two: 1,
//   three: 1
// }

console.log(
  countWordFrequencies("")
);

// {}
```

---

## Time Complexity

### O(n)

The sentence is processed from beginning to end to normalize, split, and count its words.

Here, `n` represents the length of the input sentence.

---

## Space Complexity

### O(n)

Additional memory is used for the words array and frequency object.

In the worst case, every word may be unique.

---

## Concepts Used

- JavaScript Strings
- Objects
- Hash Maps
- Frequency Counting
- `String.prototype.toLowerCase()`
- `String.prototype.split()`
- Regular Expressions
- `Array.prototype.filter()`
- `for...of` Loop
- Conditional Counting

---

## Project Structure

```text
02-count-word-frequencies/
├── question.md
├── solution.js
└── README.md
```

---

## Expected Result

```javascript
countWordFrequencies("Hello world, hello!");
```

Output:

```javascript
{
  hello: 2,
  world: 1
}
```