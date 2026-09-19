# Check if Two Strings Are Anagrams

## Problem Description

Write a function `isAnagram` that takes two strings and determines whether they are anagrams of each other.

Two strings are considered anagrams if they contain the same letters with the same frequencies, but possibly in a different order.

The comparison should:

- Ignore uppercase and lowercase differences
- Ignore spaces
- Ignore punctuation
- Consider only English alphabetic characters
- Return `true` if the strings are anagrams
- Return `false` otherwise

---

## Function Signature

```javascript
function isAnagram(s1, s2) {
  // Implement your solution here
}
```

---

## Examples

### Example 1

```javascript
isAnagram("listen", "silent");
```

### Expected Output

```text
true
```

### Explanation

Both strings contain exactly the same letters:

```text
listen
silent
```

After sorting their characters, both become the same sequence.

---

### Example 2

```javascript
isAnagram("Hello", "world");
```

### Expected Output

```text
false
```

### Explanation

The two strings do not contain the same letters with the same frequencies.

---

### Example 3

```javascript
isAnagram(
  "A decimal point",
  "I'm a dot in place"
);
```

### Expected Output

```text
true
```

### Explanation

After ignoring spaces, punctuation, and case differences:

```text
A decimal point
```

and:

```text
I'm a dot in place
```

contain the same letters.

---

## Constraints

- `s1` and `s2` will be strings.
- The comparison is case-insensitive.
- Spaces should be ignored.
- Punctuation should be ignored.
- Only English alphabetic characters from `a` to `z` should be considered.
- Letter frequency matters.
- Character order does not matter.

---

## Topics

- String
- Array
- Sorting
- Regular Expressions
- String Normalization
- Anagram
- Easy

---

## Hints

### Hint 1

Convert both strings to lowercase so uppercase and lowercase versions of the same letter are treated equally.

For example:

```javascript
"Hello".toLowerCase()
```

becomes:

```text
hello
```

---

### Hint 2

Remove everything except English letters.

You can use:

```javascript
.replace(/[^a-z]/g, "")
```

For example:

```text
"I'm a dot!"
```

can become:

```text
imadot
```

---

### Hint 3

After cleaning both strings, split them into arrays of characters:

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

### Hint 4

Sort the characters:

```javascript
.sort()
```

If two normalized strings are anagrams, their sorted characters should be identical.

---

### Hint 5

Join the sorted character arrays back into strings:

```javascript
.join("")
```

Then compare the final normalized values using:

```javascript
===
```