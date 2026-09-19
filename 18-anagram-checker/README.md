# Check if Two Strings Are Anagrams

A JavaScript string manipulation problem that checks whether two strings are anagrams.

Two strings are anagrams when they contain the same letters with the same frequencies, even if those letters appear in a different order.

The comparison ignores:

- Uppercase and lowercase differences
- Spaces
- Punctuation

Only English alphabetic characters are considered.

---

## Problem Overview

Given two strings, determine whether they are anagrams.

For example:

```javascript
isAnagram("listen", "silent");
```

returns:

```text
true
```

because both strings contain the same letters:

```text
e, i, l, n, s, t
```

in different orders.

Another example:

```javascript
isAnagram("Hello", "world");
```

returns:

```text
false
```

because the strings contain different characters.

---

## Solution

```javascript
function isAnagram(s1, s2) {
  const normalize = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  };

  return normalize(s1) === normalize(s2);
}
```

---

## Approach

The solution uses a helper function called:

```javascript
normalize
```

The purpose of this function is to convert each input string into a common format that can easily be compared.

---

## Step 1: Convert to Lowercase

Use:

```javascript
.toLowerCase()
```

For example:

```text
Hello
```

becomes:

```text
hello
```

This ensures that uppercase and lowercase letters are treated as the same character.

---

## Step 2: Remove Spaces and Punctuation

Use:

```javascript
.replace(/[^a-z]/g, "")
```

The regular expression:

```text
[^a-z]
```

means:

```text
any character that is NOT between a and z
```

The `g` flag means the replacement should be applied globally throughout the string.

For example:

```text
A decimal point!
```

can become:

```text
adecimalpoint
```

---

## Step 3: Split into Characters

Use:

```javascript
.split("")
```

For example:

```text
listen
```

becomes:

```javascript
["l", "i", "s", "t", "e", "n"]
```

---

## Step 4: Sort the Characters

Use:

```javascript
.sort()
```

For example:

```javascript
["l", "i", "s", "t", "e", "n"].sort();
```

becomes:

```javascript
["e", "i", "l", "n", "s", "t"]
```

Doing this to both strings creates a common character order.

---

## Step 5: Join the Characters

Use:

```javascript
.join("")
```

The sorted array:

```javascript
["e", "i", "l", "n", "s", "t"]
```

becomes:

```text
eilnst
```

---

## Step 6: Compare the Normalized Strings

Finally:

```javascript
return normalize(s1) === normalize(s2);
```

If both normalized strings are identical, return:

```text
true
```

Otherwise return:

```text
false
```

---

## Step-by-Step Example

Consider:

```javascript
isAnagram("listen", "silent");
```

### First String

Input:

```text
listen
```

Lowercase:

```text
listen
```

Remove non-letters:

```text
listen
```

Split:

```javascript
["l", "i", "s", "t", "e", "n"]
```

Sort:

```javascript
["e", "i", "l", "n", "s", "t"]
```

Join:

```text
eilnst
```

---

### Second String

Input:

```text
silent
```

Lowercase:

```text
silent
```

Remove non-letters:

```text
silent
```

Split:

```javascript
["s", "i", "l", "e", "n", "t"]
```

Sort:

```javascript
["e", "i", "l", "n", "s", "t"]
```

Join:

```text
eilnst
```

The final normalized values are identical:

```text
eilnst === eilnst
```

Therefore:

```text
true
```

---

## Example with Spaces and Punctuation

Input:

```javascript
isAnagram(
  "A decimal point",
  "I'm a dot in place"
);
```

After normalization, punctuation, spaces, and capitalization differences are removed.

Both strings produce the same sorted characters.

Therefore:

```text
true
```

---

## Test Cases

```javascript
console.log(
  isAnagram("listen", "silent")
);
// true

console.log(
  isAnagram("Hello", "world")
);
// false

console.log(
  isAnagram(
    "A decimal point",
    "I'm a dot in place"
  )
);
// true

console.log(
  isAnagram("Dormitory", "Dirty room")
);
// true

console.log(
  isAnagram("School master", "The classroom")
);
// true

console.log(
  isAnagram("JavaScript", "Python")
);
// false

console.log(
  isAnagram("", "")
);
// true
```

---

## Important Detail

Anagrams require the same number of each letter.

For example:

```javascript
isAnagram("aab", "abb");
```

returns:

```text
false
```

Although both strings contain `a` and `b`, their frequencies are different.

The first string contains:

```text
a → 2
b → 1
```

The second contains:

```text
a → 1
b → 2
```

Therefore, they are not anagrams.

---

## Time Complexity

### O(n log n)

The main cost comes from sorting the characters.

If the normalized string has `n` characters, sorting requires approximately:

```text
O(n log n)
```

time.

---

## Space Complexity

### O(n)

Additional arrays and normalized strings are created during processing.

---

## Concepts Used

- JavaScript Strings
- Helper Functions
- Arrow Functions
- `String.prototype.toLowerCase()`
- `String.prototype.replace()`
- Regular Expressions
- `String.prototype.split()`
- `Array.prototype.sort()`
- `Array.prototype.join()`
- Strict Equality
- String Normalization

---

## Project Structure

```text
05-anagram-checker/
├── question.md
├── solution.js
└── README.md
```

---

## Expected Results

```javascript
isAnagram("listen", "silent");
// true

isAnagram("Hello", "world");
// false

isAnagram(
  "A decimal point",
  "I'm a dot in place"
);
// true
```