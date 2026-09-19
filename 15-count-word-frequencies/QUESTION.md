# Count Word Frequencies

## Problem Description

Given a sentence, return an object containing the frequency count of each word.

Ignore case differences. For example, `"The"` and `"the"` should be treated as the same word.

Words consist of alphanumeric characters.

Punctuation and spaces should be ignored when determining words.

---

## Function Signature

```javascript
function countWordFrequencies(sentence) {
  // Implement your solution here
}
```

---

## Examples

### Example 1

```javascript
countWordFrequencies("Hello world, hello!");
```

### Expected Output

```javascript
{
  hello: 2,
  world: 1
}
```

### Input

```text
sentence = "Hello world, hello!"
```

### Output

```text
{"hello": 2, "world": 1}
```

---

### Example 2

```javascript
countWordFrequencies(
  "The quick brown fox jumps over the lazy dog."
);
```

### Expected Output

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

### Input

```text
sentence = "The quick brown fox jumps over the lazy dog."
```

### Output

```text
{
  "brown": 1,
  "dog": 1,
  "fox": 1,
  "jumps": 1,
  "lazy": 1,
  "over": 1,
  "quick": 1,
  "the": 2
}
```

The order of object properties is not important for the frequency calculation.

---

## Constraints

- The input `sentence` will be a string.
- Words consist of alphanumeric characters.
- Punctuation should be ignored when determining words.
- Spaces should be ignored when determining words.
- Word comparison should be case-insensitive.

---

## Topics

- String
- Object
- Hash Map
- Frequency Counting
- Regular Expressions
- Easy

---

## Hints

### Hint 1

Consider converting the entire sentence to a consistent case first.

For example, convert the sentence to lowercase:

```javascript
sentence.toLowerCase();
```

This ensures that words such as:

```text
Hello
hello
HELLO
```

are all treated as the same word.

---

### Hint 2

You can use `String.prototype.split()` with a regular expression to break the sentence into words.

A regular expression such as:

```javascript
/[^a-z0-9]+/
```

can split the sentence wherever one or more characters are not letters or numbers.

For example:

```text
"Hello world, hello!"
```

can become:

```javascript
["hello", "world", "hello"]
```

---

### Hint 3

An object, or hash map, is suitable for storing word counts.

The word can be used as the key and its frequency as the value.

For example:

```javascript
{
  hello: 2,
  world: 1
}
```

Each time a word appears, increase its count by `1`.