# Reverse Each Word

## Problem Statement

Write a function named `reverseEachWord(str)` that reverses every word in a given string while keeping the original word order unchanged.

Each individual word should be reversed, but the position of the words in the sentence should remain the same.

## Examples

### Example 1

```text
Input: "Hello World"
Output: "olleH dlroW"
```

### Explanation

Each word is reversed separately:

```text
Hello → olleH
World → dlroW
```

So the final result is:

```text
olleH dlroW
```

---

### Example 2

```text
Input: "JavaScript is fun"
Output: "tpircSavaJ si nuf"
```

### Explanation

```text
JavaScript → tpircSavaJ
is         → si
fun        → nuf
```

The word order remains unchanged.

## Function Signature

```js
function reverseEachWord(str) {
    // Your code here
}
```

## Requirements

- Reverse each word individually.
- Keep the original order of the words.
- Preserve the spaces between words.
- Return the final reversed sentence as a string.

## Expected Results

```js
reverseEachWord("Hello World");
// "olleH dlroW"

reverseEachWord("JavaScript is fun");
// "tpircSavaJ si nuf"

reverseEachWord("I love coding");
// "I evol gnidoc"
```

## Topics

- JavaScript
- Strings
- Arrays
- `split()`
- `map()`
- `reverse()`
- `join()`
- Problem Solving